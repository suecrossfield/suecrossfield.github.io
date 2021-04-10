---
layout: page
title: CV
---

# Curriculum Vitae

<div class="hresume" markdown="1">

<div class="vcard" id="sue-crossfield-hcard" style="display:none;">
    <span class="fn">Sue Crossfield</span>
    <a href="mailto:sue@suecrossfield.co.uk" class="email">sue@suecrossfield.co.uk</a>
    <span class="adr"><span class="locality">Ashbourne</span>,
    <span class="region">Derbyshire</span></span>.
    <span class="geo" style="display:none;">
        <span class="latitude">1.731</span>
        <span class="longitude">53.016</span>
    </span>
</div>

Please see the [About page](/) for details of upcoming events.

I am a ceramic artist working in stoneware. My creativity is inspired by natural marine forms and Japanese culture. I sell at events and galleries across the country and occasionally abroad.

## Qualifications

<ul class="events">
{% include event.html start="1964-09-01" end="01-06-1967" summary="B.A. Honours — 3D Design (Ceramics)" location="Manchester College of Art and Design" %}
{% include event.html start="1967-09-01" end="01-06-1968" summary="Art Teachers Certificate" location="Birmingham University" %}
</ul>


## Employment

<ul class="events">
{% include event.html start="1968-07-01" end="01-07-2003" summary="Various full and part-time teaching posts in Art and Design, in secondary and Adult Education" %}
{% include event.html start="1998-01-01" end="present" summary="Full-time Ceramic Artist" %}
</ul>

## Recent Exhibitions and Events

<ul id="past-exhibitions" class="events">
</ul>
<script type="text/javascript">
    function eventEntry(event) {
        let result = `<li class="vevent education">
                <div class="event-date">
                    <abbr class="dtstart" title="${event.startDate}"></abbr><abbr class="dtend" title="${event.endDate}"></abbr>${event.dateWithoutDay}
                </div>
                <div class="summary">`;
        result += event.link ? `<a href="${event.link}" target="_blank" class="url" rel="nofollow">${event.name}</a>` : `${event.name}`;
        result += `</div>
                <div class="location">${event.location}</div>
                <div class="clear">&nbsp;</div>
            </li>`;
        return result
    }
    let pastExhibitionContents = '';
    allEvents.filter(event => event.endDate < now).sort((a, b) => b.startDate - a.startDate).forEach(event => pastExhibitionContents += eventEntry(event));
    document.getElementById('past-exhibitions').innerHTML = pastExhibitionContents;
</script>

</div>