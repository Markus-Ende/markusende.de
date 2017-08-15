const test = require('tape');
const { BlogEntryTranspiler, StateEnum } = require('./blog-entry-transpiler');

console.log('Testing BlogEntryTranspiler');

test('constructor should create instance', (t) => {
  t.assert(new BlogEntryTranspiler('test') !== undefined);
  t.end();
});

test('constructor should throw exception if no markdown source given', (t) => {
  t.throws(() => new BlogEntryTranspiler(), /invalid markdown source/);
  t.end();
});

test('getMetadata() should throw exception if no heading was found', (t) => {
  t.throws(() => new BlogEntryTranspiler('test').getMetadata(), /no heading found/);
  t.end();
});

test('getMetadata() should throw exception if no metadata found', (t) => {
  t.throws(() => new BlogEntryTranspiler(' \n\t  # heading').getMetadata(), /no metadata found/);
  t.end();
});

test('getMetadata() should throw exception if metadata has wrong format', (t) => {
  t.throws(() => new BlogEntryTranspiler('```WRONG FORMAT```\n# heading').getMetadata(), /metadata format incorrect/);
  t.end();
});

test('getMetadata() should throw exception if created value is no valid iso date string', (t) => {
  const markdown = `\`\`\`
    created:
    last modified:
    short title:
    state:
  \`\`\`
  # heading`;
  t.throws(() => new BlogEntryTranspiler(markdown).getMetadata(), /invalid "created" date format/);
  t.end();
});

test('getMetadata() should throw exception if last modified value is no valid iso date string', (t) => {
  const markdown = `\`\`\`
    created: 2017-10-02T15:05:00.000Z
    last modified: WRONG
    short title:
    state:
  \`\`\`
  # heading`;
  t.throws(() => new BlogEntryTranspiler(markdown).getMetadata(), /invalid "last modified" date format/);
  t.end();
});

test('getMetadata() should throw exception if short title is invalid', (t) => {
  const markdown = `\`\`\`
    created: 2017-10-02T15:05:00.000Z
    last modified: 2017-10-02T15:05:00.000Z
    short title:
    state:
  \`\`\`
  # heading`;
  t.throws(() => new BlogEntryTranspiler(markdown).getMetadata(), /invalid "short title" \(min 5 letters\)/);
  t.end();
});

test('getMetadata() should throw exception if state is invalid', (t) => {
  const markdown = `\`\`\`
    created: 2017-10-02T15:05:00.000Z
    last modified: 2017-10-02T15:05:00.000Z
    short title: TEST!
    state: invalid
  \`\`\`
  # heading`;
  t.throws(() => new BlogEntryTranspiler(markdown).getMetadata(), /invalid "state"/);
  t.end();
});

test('getMetadata() should return parsed metadata', (t) => {
  const markdown = `\`\`\`
    created: 2017-10-02T15:05:00.000Z
    last modified: 2018-10-02T15:05:00.000Z
    short title: TEST!
    state: DRAFT
  \`\`\`
  # heading `;
  t.deepEquals(
    new BlogEntryTranspiler(markdown).getMetadata(),
    {
      created: new Date('2017-10-02T15:05:00.000Z'),
      lastModified: new Date('2018-10-02T15:05:00.000Z'),
      shortTitle: 'TEST!',
      fullTitle: 'heading',
      state: StateEnum.DRAFT
    }
  )
  t.end();
});

test('getContentAsHtml() should transpile to html', (t) => {
  const markdown = `\`\`\`
    created: 2017-10-02T15:05:00.000Z
    last modified: 2018-10-02T15:05:00.000Z
    short title: TEST!
    state: DRAFT
  \`\`\`
  # heading
  Test`;
  t.equals(
    new BlogEntryTranspiler(markdown).getContentAsHtml(),
    '<h1><a name="heading" class="anchor" href="#heading"><span class="header-link"></span></a>heading</h1><p>Test</p>\n'
  )
  t.end();
});


