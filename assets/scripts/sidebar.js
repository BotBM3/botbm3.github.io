// Sidebar generator using headers in page content

function buildSidebar(contentClassID='.main-content', sidebarID='#sidebar-links') {
	const content = $(contentClassID);
	const sidebarLinks = $(sidebarID);
	const headers = content.find('h1, h2, h3, h4, h5, h6');

	let currentList = sidebarLinks;
	let previousLevel = 1;

	headers.each(function() {
			const header = $(this);
			if (header.closest('.no-sidebar').length === 0) { // Skip headers within 'no-sidebar'
					const level = parseInt(header.prop('tagName').substr(1));
					const text = header.text();
					const id = header.attr('id') || header.text().toLowerCase().replace(/[^a-z0-9]+/g, '-');

					header.attr('id', id);

					const link = $('<a>').text(text).attr('href', '#' + id);
					const listItem = $('<li>').append(link);

					if (header.parents('.sidebar-toggle').length > 0) {
							listItem.addClass('toggle-item');
							listItem.children('a').click(function(e) {
									e.preventDefault();
									$(this).parent().toggleClass('expanded');
									$(this).parent().children('ul').slideToggle(); // Smoothly toggle visibility of nested lists
							});
					}

					if (level === 1) {
							sidebarLinks.append(listItem);
							currentList = $('<ul>').appendTo(listItem);
							previousLevel = 2;
					} else {
							if (level > previousLevel) {
									const newList = $('<ul>');
									currentList.children('li').last().append(newList);
									currentList = newList;
							} else if (level < previousLevel) {
									for (let i = 0; i < previousLevel - level; i++) {
											currentList = currentList.parents('ul').first();
									}
							}

							currentList.append(listItem);
							previousLevel = level;
					}
			}
	});
};

function makeSidebarV1(contentClassID='.main-content', sidebarID='#sidebar-links') {
    const content = $(contentClassID);
		const sidebarLinks = $(sidebarID);
		const headers = content.find('h1, h2, h3, h4, h5, h6');
		
		let currentList = sidebarLinks;
		let previousLevel = 1;

		headers.each(function() {
			const header = $(this);
			const level = parseInt(header.prop('tagName').substr(1));
			const text = header.text();
			const id = header.attr('id') || header.text().toLowerCase().replace(/[^a-z0-9]+/g, '-');
			
			header.attr('id', id);

			const link = $('<a>').text(text).attr('href', '#' + id);
			const listItem = $('<li>').append(link);

			// Handle h1 separately
			if (level === 1) {
				sidebarLinks.append(listItem);
				currentList = $('<ul>').appendTo(sidebarLinks);
				previousLevel = 2;
			} else {
				if (level > previousLevel) {
					const newList = $('<ul>');
					currentList.children('li').last().append(newList);
					currentList = newList;
				} else if (level < previousLevel) {
					for (let i = 0; i < previousLevel - level; i++) {
						currentList = currentList.parent().parent();
					}
				}

				currentList.append(listItem);
				previousLevel = level;
			}

			// Add smooth scrolling
			link.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: header.offset().top - 20
				}, 500);
			});
		});
	};

function makeSidebarV2(contentClassID='.main-content', sidebarID='#sidebar-links') {
	const content = $(contentClassID);
	const sidebarLinks = $(sidebarID);
	const headers = content.find('h1, h2, h3, h4, h5, h6');

	let currentList = sidebarLinks;
	let previousLevel = 1;

	headers.each(function() {
		const header = $(this);
		// Check if the header or any of its parents has the class 'no-sidebar'
		if (header.closest('.no-sidebar').length === 0) { // Only process headers without 'no-sidebar' class in the hierarchy
			const level = parseInt(header.prop('tagName').substr(1));
			const text = header.text();
			const id = header.attr('id') || header.text().toLowerCase().replace(/[^a-z0-9]+/g, '-');

			header.attr('id', id);

			const link = $('<a>').text(text).attr('href', '#' + id);
			const listItem = $('<li>').append(link);

			// Handle h1 separately
			if (level === 1) {
				sidebarLinks.append(listItem);
				currentList = $('<ul>').appendTo(sidebarLinks);
				previousLevel = 2;
			} else {
				if (level > previousLevel) {
					const newList = $('<ul>');
					currentList.children('li').last().append(newList);
					currentList = newList;
				} else if (level < previousLevel) {
					for (let i = 0; i < previousLevel - level; i++) {
						currentList = currentList.parent().parent();
					}
				}

				currentList.append(listItem);
				previousLevel = level;
			}

			// Add smooth scrolling
			link.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: header.offset().top - 20
				}, 500);
			});
		}
	});
};