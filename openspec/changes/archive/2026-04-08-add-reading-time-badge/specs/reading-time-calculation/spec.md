## ADDED Requirements

### Requirement: Reading time calculation from article body

The system SHALL calculate estimated reading time based on the article body content using a reading speed of 200 words per minute.

#### Scenario: Calculate reading time for standard article

- **WHEN** an article has a body with 400 words
- **THEN** the system displays "2 min read"

#### Scenario: Calculate reading time with markdown content

- **WHEN** an article body contains markdown formatting (headers, links, bold text)
- **THEN** the system strips markdown syntax before counting words

#### Scenario: Round up partial minutes

- **WHEN** an article has 350 words (1.75 minutes at 200 WPM)
- **THEN** the system displays "2 min read" (rounded up)

#### Scenario: Minimum reading time

- **WHEN** an article has fewer than 200 words
- **THEN** the system displays "1 min read" as the minimum

#### Scenario: Handle empty or null content

- **WHEN** an article body is empty or null
- **THEN** the system displays "1 min read" as the default

### Requirement: Display reading time on article preview cards

The system SHALL display the estimated reading time badge on article preview cards in both global and personal feeds.

#### Scenario: Reading time visible on article preview

- **WHEN** a user views an article preview card
- **THEN** the reading time badge is displayed alongside the article metadata

#### Scenario: Reading time updates with article content

- **WHEN** an article's content changes
- **THEN** the displayed reading time updates accordingly

### Requirement: Display reading time on article detail page

The system SHALL display the estimated reading time badge on the article detail page.

#### Scenario: Reading time visible on article detail page

- **WHEN** a user views the full article page
- **THEN** the reading time badge is displayed in the article banner section

#### Scenario: Reading time consistent across views

- **WHEN** a user navigates from article preview to article detail
- **THEN** the reading time displayed is identical in both views

### Requirement: Reading time format

The system SHALL format reading time as "X min read" where X is a positive integer.

#### Scenario: Single minute format

- **WHEN** reading time is 1 minute
- **THEN** the system displays "1 min read"

#### Scenario: Multiple minutes format

- **WHEN** reading time is 5 minutes
- **THEN** the system displays "5 min read"

#### Scenario: Long article format

- **WHEN** reading time is 45 minutes
- **THEN** the system displays "45 min read"
