import { renderGallery } from './items'; 

const attachEvents = (selector) => {
    const navItems = $(selector);

    navItems.click( (event)=>{
        const galleryId = $(event.currentTarget).data('id');

        if( typeof galleryId === 'string' && galleryId.trim().length > 0){
            renderGallery(galleryId);
        }
        console.log(`Gallery:${galleryId}`);
    });
};

const createNavItemTpl = (id, title)=>{
    return `<li class="nav-item" data-id="${id}">
    <a class="nav-link" href="#">${title}</a>
</li>`;
};

const createNavigationList = (galleries)=>{
    return galleries.map( (gallery)=>{
        return createNavItemTpl(gallery.id, gallery.title);
    }).join('');//return map
}

const fetchGalleriesList = (selector)=>{
    //            http://site.com/api/galeries
    return $.get('./data.json');
}

export const initNavigation = (selector)=>{
    fetchGalleriesList(selector)
        .then((data)=>{
            $('#navigation').append(createNavigationList(data.galleries));
            console.log(`get data`);
            attachEvents(selector);
            console.log(`after attach events`);
        })
        .catch((error)=>console.log(error));
}