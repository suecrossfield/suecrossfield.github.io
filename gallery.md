---
layout: page
title: Gallery
---

# Gallery

Here are some photos representing a selection of my work.

## Recent work

<ul class="gallery">

{% for photo in site.data.photo_highlights %}
{% if photo.id %}
{% capture caption %}{{photo.id}}, {{photo.name}}{% endcapture %}
{% else %}
{% capture caption %}{{photo.name}}{% endcapture %}
{% endif %}
{% include image.html path=photo.filename caption=caption %}

{% endfor %}

</ul>


## Older work

<ul class="gallery">

{% for photo in site.data.photos %}
{% if photo.id %}
{% capture caption %}{{photo.id}}, {{photo.name}}{% endcapture %}
{% else %}
{% capture caption %}{{photo.name}}{% endcapture %}
{% endif %}
{% include image.html path=photo.filename caption=caption %}

{% endfor %}

</ul>

<div style="clear: both;">&nbsp;</div>