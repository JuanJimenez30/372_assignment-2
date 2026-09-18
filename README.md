# Gifted University Campus Event Guide

## Project Description

The Gifted University Campus Event Guide is a responsive website designed to help the gifted university students discover campus activities and events. The intended audience is only for Gifted University students who are looking for social, recreational, educational, career, arts, gaming, and community activities.

The website includes a home page that displays upcoming campus events and an event details page for the featured Campus Soccer Night event. Students can view event dates, times, locations, descriptions, related events, and other useful information.

## Layout Decisions

CSS Flexbox and CSS Grid are used throughout the website to create organized and responsive layouts.

### Flexbox

Flexbox is used in the following areas:

* **Header:** Flexbox is used to align the university logo, heading, and other header content while allowing the elements to wrap when the screen becomes smaller.
* **Navigation:** The navigation links use Flexbox to center the links, create consistent spacing, and allow the links to wrap or become vertical on smaller screens.
* **Hero Section:** Flexbox is used to place the hero text and image next to each other on larger screens and stack them on smaller screens.
* **Related Events:** Flexbox is used to display the related event cards in a row and allow them to wrap when there is not enough horizontal space.

Flexbox is appropriate for these areas because these elements need flexible alignment and spacing rather than a fixed row-and-column structure.

### CSS Grid

CSS Grid is used in two main areas:

* **Upcoming Events:** The event cards on the home page use CSS Grid to organize the five upcoming events. The first two cards span two columns, while the remaining cards use one column, creating two different card widths.
* **Event Details:** The featured event page uses CSS Grid to create a two-column layout containing the main event information and a sidebar.

Grid is appropriate for these sections because it provides control over rows and columns and makes it easier to create structured page layouts.

## Responsive Design

The website uses responsive CSS so that the pages can be viewed on desktop, tablet, and smaller mobile screens.

### 900px Breakpoint

At screens 900 pixels wide or smaller:

* The upcoming event grid changes from four columns to two columns.
* Event cards use one column each.
* The event details page changes from a two-column layout to a single-column layout.
* The event sidebar moves below the main event content.
* The hero section has reduced spacing.
* The event introduction heading becomes smaller.

### 600px Breakpoint

At screens 600 pixels wide or smaller:

* The navigation changes to a vertical layout.
* The university logo and heading become smaller.
* The hero content and image stack vertically.
* The upcoming events grid changes to one column.
* Event card widths adjust to the available screen size.
* The event details content uses smaller padding.
* The related event cards stack vertically.
* The event introduction image has a smaller maximum height.

The pages were tested by resizing the browser window to check the desktop, tablet, and mobile layouts. The navigation, event cards, hero section, event sidebar, and related events were checked to make sure the content remains readable and organized at smaller screen sizes.

## Semantic HTML

The website uses semantic HTML elements to give the content meaningful structure.

* **`<header>`** is used for the website branding, logo, tagline, and primary navigation.
* **`<nav>`** is used for the site's navigation links.
* **`<main>`** identifies the primary content of each page. Each page contains exactly one main element.
* **`<section>`** groups related content such as the hero section, upcoming events, About section, and related events.
* **`<article>`** is used for individual event cards because each event represents an independent piece of content.
* **`<aside>`** is used for the event information sidebar because it contains supporting information about the featured event.
* **`<figure>`** and **`<figcaption>`** are used to group event images with their captions.
* **`<time>`** is used for event dates and times so that the schedule information has appropriate semantic meaning.
* **`<footer>`** contains copyright, contact information, and additional navigation links.

## Sources

### Images

The images used in this project are stored locally in the `images/` folder.

* download.jpg — AI-generated image used for the Gifted University logo. Generated using an AI image generator.
* students_participating.jpg — Image sourced from the University of Toledo News article, “Student Involvement Fair Set for Aug. 29” (August 19, 2021). 
* students_playing_soccer.jpg — Soccer stock photo by Myron Standret, sourced from Vecteezy. Vecteezy attribution is required for the free license.
* college_gaming.jpg — Image sourced from the University of North Carolina at Greensboro (UNCG) Esports website, from the article “UNCG Opens New Esports Arena.”
* career_event.jpg — Image sourced from the University of Arkansas Walton College Career Development Resources page, “Career Development Workshops.”
* students_painting.jpg — Image sourced from an Instagram post.
* college_volunteer.png — Image sourced from the TeenLife article, “Why Volunteering Is Important for College Applications.”

### Fonts

The website uses the following system fonts:

* Arial
* Helvetica
* sans-serif

No external font libraries are used.

### Content

The university, event names, organizations, locations, schedules, and descriptions used on the website were created for this project. No significant content was copied from an external website.
