<span id="events-list"></span>

<script type="text/javascript">
let eventsContents = 'I do not have any future events scheduled at the moment. Please see the <a href="cv.html">CV page</a> for details of events past.'
if (events.length > 0) {
    eventsContents = '<ul>'
    events.forEach(event => eventsContents+=`<li>${event.slug}</div>`)
    eventsContents += '</ul>'
}
document.getElementById('events-list').innerHTML = eventsContents;
</script>
