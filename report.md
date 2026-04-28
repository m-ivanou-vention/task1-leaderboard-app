# Approach Report

This task was approached as a UI replication exercise with two constraints:

1. Replicate the original leaderboard interface and behavior as closely as possible.
2. Exclude all original leaderboard data and replace it with synthetic content.

The implementation was kept static, with no backend integrations.

## Method

The original SharePoint page was parsed with the MCP browser server and inspected through live DOM queries, accessibility snapshots, and computed-style checks. That was used to extract the leaderboard container structure, control sizing, spacing, typography, and interaction states.

The replica was then built with plain HTML, CSS, and JavaScript and refined by comparing the local result against the original page in repeated measurement passes.

## Data Replacement

No original names, titles, departments, or activity records were reused. The original data was used only as a structural reference for the fields the UI needed to display.

To replace it safely, the leaderboard was repopulated with synthetic people, fictional roles, invented org codes, and fake activity entries. The replacement data followed the same shape as the original interface expectations, including:

- employee name
- role or title label
- organization-style code
- activity title
- activity category
- activity date
- point value

The synthetic dataset was distributed across categories and quarters so the leaderboard still behaved realistically. That preserved:

- ranking by total score
- podium ordering for the top three entries
- filtering by quarter and category
- name search
- expanded recent-activity tables for each person

The fake dataset is stored in a separate `employees.json` file instead of being embedded directly in the application script. The page loads that JSON at runtime and applies the existing filtering, ranking, and rendering logic to the loaded records. This keeps the data separate from the UI code and makes it easier to review or replace.

This preserved the leaderboard logic and visual density without carrying over any real organizational content.

## Result

The final result is a static leaderboard replica that closely matches the original UI and behavior while using fully synthetic data.