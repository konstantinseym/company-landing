DROP TABLE IF EXISTS stringvalues;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  post TEXT NOT NULL,
  imageurl TEXT NOT NULL,
  imagealt TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE news (
  id BIGSERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE stringvalues (
  id BIGSERIAL PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  data JSONB NOT NULL
);

INSERT INTO employees (name, post, imageurl, imagealt, position)
VALUES
  (
    'Alexander Morgan',
    'Chief Executive Officer (CEO)',
    '/uploads/1777115317727.png',
    'Morgan A.',
    1
  ),
  (
    'Margaret Collins',
    'Deputy Financial Advisor',
    '/uploads/1777115452734.png',
    'Collins M.',
    2
  ),
  (
    'Brian Whitaker',
    'Head of External Security',
    '/uploads/1777115765128.png',
    'Whitaker B.',
    3
  ),
  (
    'Peanut Butter',
    'Chief Happiness Officer (CHO)',
    '/uploads/1777115890179.png',
    'Butter P.',
    4
  );

INSERT INTO news (date, title, content)
VALUES (
  '2026-04-25 14:04:36.549214',
  'Q1 2026 Results Exceed Expectations',
  'We are proud to announce a strong start to 2026, with first-quarter performance surpassing our internal targets across key business areas. Strategic initiatives launched at the end of last year have already begun delivering measurable results, driving both revenue growth and operational efficiency.

During Q1, we expanded our client portfolio, strengthened long-term partnerships, and successfully implemented several high-impact projects. Our teams demonstrated exceptional focus and adaptability, allowing us to respond quickly to market opportunities and maintain consistent progress in a dynamic environment.

As we move forward, we remain committed to building on this momentum. With a clear vision and a growing pipeline of opportunities, we are confident that 2026 will be a year of continued growth, innovation, and long-term value creation.'
);

INSERT INTO stringvalues (section, data)
VALUES
  (
    'detailsBlock',
    '[
      { "id": 1775504650315, "value": "Golden Synergy Holdings Ltd." },
      { "id": 1777114759059, "value": "Office 404, Success Tower" },
      { "id": 1777114770992, "value": "42 Prosperity Avenue" },
      { "id": 1777114778891, "value": "Floor 7, Suite \"Alpha Growth\"" },
      { "id": 1777114787641, "value": "Limassol 3105" },
      { "id": 1777114792059, "value": "Cyprus" }
    ]'::jsonb
  ),
  (
    'contactsBlock',
    '{
      "majorCaption": "We’re always happy to hear from you",
      "minorCaptions": [
        { "id": 1775580548625, "value": "Got an idea, a project, or just want to say hello? We’re open to new opportunities!" },
        { "id": 1777114678410, "value": "+357 25 404 777" },
        { "id": 1777114865039, "value": "hello@goldensynergy.cy" }
      ]
    }'::jsonb
  ),
  (
    'captions',
    '{
      "heroMajor": "Golden Synergy Holdings Ltd.",
      "heroMinor": "Building Ideas Into Impact",
      "newsCaption": "News",
      "detailsCaption": "Legal Information",
      "contactsCaption": "Contact Us",
      "employeesCaption": "Our Team"
    }'::jsonb
  ),
  (
    'footerLink',
    '{
      "caption": "Privacy Commitment"
    }'::jsonb
  );