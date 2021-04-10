---
test: hello
---
var now = new Date();
now.setHours(0,0,0,0);
const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}
function formattedDate(startDate, endDate) {
    let startParts = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}].map(d => new Intl.DateTimeFormat('en', d).format(startDate))
    startParts[0] = `${startParts[0]}${nth(startParts[0])}`
    let endParts = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}].map(d => new Intl.DateTimeFormat('en', d).format(endDate))
    endParts[0] = `${endParts[0]}${nth(endParts[0])}`
    if (startParts[2] === endParts[2]){
        if (startParts[1] === endParts[1]) {
            return `${startParts[0]}–${endParts[0]} ${endParts[1]} ${endParts[2]}`
        } else {
            return `${startParts[0]} ${startParts[1]}–${endParts[0]} ${endParts[1]} ${endParts[2]}`
        }
    }
    else {
        return `${startParts[0]} ${startParts[1]} ${startParts[2]}–${endParts[0]} ${endParts[1]} ${endParts[2]}`
    }
}
function eventSlug(event) {
    return `<a href="${event.link}" target="_blank" class="url" rel="nofollow">${event.name}</a>, ${event.location}, ${event.date}, (<a href="${event.socialLink} target="_blank" class="url" rel="nofollow"">social media link</a>)`
}
var events = [
{% for event in site.data.events %}
{
    name: "{{ event.name }}",
    link: "{{ event.link }}",
    socialLink: "{{ event.social_link }}",
    location: "{{ event.location }}",
    startDate: Date.parse("{{ event.start_date }}"),
    endDate: Date.parse("{{ event.end_date }}")
},
{% endfor %}
].filter(event => event.endDate > now).sort((a, b) => b.start_date - a.start_date).map(event => ({ ...event, date: formattedDate(event.startDate,event.endDate)})).map(event => ({ ...event, slug: eventSlug(event)}))
var nextEvent = events[0];