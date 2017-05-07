ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center:[59.939180, 30.327346],
				zoom:16
		}, {
				searchControlProvider: 'yandex#search'
		});
		var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map_pointer.png',
				iconImageSize: [218, 142],
				iconImageOffset: [-240, -85]
		});

		myMap.geoObjects
								.add(myPlacemark);
});