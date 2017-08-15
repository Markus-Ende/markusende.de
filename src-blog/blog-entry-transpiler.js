const marked = require('marked');
const html = require('html');

const StateEnum = Object.freeze({
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
});

const getHeadingLine = (markdown) => {
  const headingLine = markdown.split('\n').find(line => line.trim().startsWith('# '));
  if (!headingLine) {
    throw new Error('no heading found');
  }
  return headingLine;
};

const parseHeading = (markdown) => getHeadingLine(markdown).split('#')[1].trim();

const parseDate = (dateString, propertyName) => {
  let date = new Date(dateString);
  let dateOk = false;
  try {
    dateOk = date.toISOString() === dateString;
  } catch (e) {}
  if (!dateOk) {
    throw new Error(`invalid "${propertyName}" date format: '${dateString}'`)
  }
  return date;
};

const parseShortTitle = (shortTitleString) => {
  if (!shortTitleString || shortTitleString.length < 5) {
    throw new Error('invalid "short title" (min 5 letters), was: ' + shortTitleString);
  }
  return shortTitleString;
};

const parseState = (stateString) => {
  if (!(Object.getOwnPropertyNames(StateEnum).find(name => name === stateString))) {
    throw new Error(`invalid "state", allowed: ${JSON.stringify(Object.getOwnPropertyNames(StateEnum))}, but was '${stateString}'`);
  }
  return stateString;
}

const parseMetadata = (markdown) => {
  const metadataSource = markdown.split(getHeadingLine(markdown))[0].trim();
  if (!metadataSource) {
    throw new Error('no metadata found');
  }
  // test the regex at https://regex101.com/r/BfUgWN/4
  const metadataRegex = /\s*```\s*created:\s*(.*)\n\s*last modified:\s*(.*)\n\s*short title:\s*(.*)\n\s*state:\s*(.*)\s*```\s*/gm;
  const result = metadataRegex.exec(metadataSource);

  if (!result) {
    throw new Error('metadata format incorrect, was: ' + metadataSource);
  }

  const created = parseDate(result[1], 'created');
  const lastModified = parseDate(result[2], 'last modified');
  const shortTitle = parseShortTitle(result[3]);
  const fullTitle = parseHeading(markdown);
  const state = parseState(result[4]);

  return {
    created,
    lastModified,
    shortTitle,
    fullTitle,
    state
  };
};

const parseContent = (markdown) => {
  const headlineSource = getHeadingLine(markdown).trim();
  const contentSource = `${headlineSource}\n${markdown.split(headlineSource)[1].trim()}`;
  return marked(contentSource);
}

const setupMarked = () => {
  const renderer = new marked.Renderer();

  renderer.heading = (text, level) => {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    return '<h' + level + '><a name="' +
                  escapedText +
                   '" class="anchor" href="#' +
                   escapedText +
                   '"><span class="header-link"></span></a>' +
                    text + '</h' + level + '>';
  }

  marked.setOptions({
    renderer: renderer
  });
}

setupMarked();

class BlogEntryTranspiler {
  constructor(markdownSource) {
    if (!markdownSource || typeof markdownSource !== 'string') {
      throw new Error('invalid markdown source');
    }
    this._markdownSource = markdownSource;
  }

  getMetadata() {
    return parseMetadata(this._markdownSource);
  }

  getContentAsHtml() {
    return parseContent(this._markdownSource);
  }
}

exports.BlogEntryTranspiler = BlogEntryTranspiler;
exports.StateEnum = StateEnum;



/*
let heading = content.split('\n').find(line => line.trim().startsWith('# '));
    if (heading === undefined) {
      console.error(`did not find heading of ${id}.`);
      process.exit(1);
    } else {
      heading = heading.replace('#', '').trim();
    }
    blogMetadata.push({ id, heading, content });
    blogHtmlTemplate += `<div *ngSwitchCase="'${id}'">${marked(content)}</div>`;
    blogEntryIdEnum += `\n  ${id.replace(/[^a-z0-9]/gi, '_').toUpperCase()} = <any>'${id}',`;

    */
