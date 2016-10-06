# Stargazer

We're going to build a stargazing application that lets users search for their favorite stars by name, then displays an image of that star on the page.

## Tasks
- When a user types in a star name into the `#search-name` input on the page, an AJAX request is sent to the [strudel.org.uk](http://strudel.org.uk) API (full URL in starter code).
- When the AJAX response comes back with an image URL, parse the JSON it comes in to get the image URL and add the image to the DOM in the `#preview` element
- If no star with the name the user typed in is found, display an error message informing the user in the `#preview` section instead.

## Tips
- You'll need to use the JSONP dataType for this AJAX request, since the `strudel.org.uk` API doesn't support CORS. Read the [jQuery AJAX docs](http://api.jquery.com/jquery.ajax/) (or Google for more info) to figure out how.
- The image URLs you receive back from the `strudel.org.uk` API might be in HTTPS format - which means they won't display on our insecure pages served over HTTP. How can you manipulate the URLs of the returned image URLs to make sure they are served over HTTP instead of HTTPs?

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
