import { renderGallery } from './items'; 

const attachEvents = (selector) => {
    const navItems = $(selector);

    navItems.click( (event)=>{
        const galleryName = $(event.currentTarget).data('name');

        if( typeof galleryName === 'string' && galleryName.trim().length > 0){
            renderGallery(galleryName);
        }
        console.log(`Gallery:${galleryName}`);
    });
};

export const initNavigation = (selector)=>{
    attachEvents(selector);
}