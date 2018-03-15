const createItemTpl =  (data)=>{
    return `<section class="col-sm-4 col-md-6 item">
<div class="row">
  <header class="col-sm-4 col-md-12 col-lg-4">
    <img class="img-fluid img-thumbnail" src="./assets/images/${data.src}" alt="${data.alt}">          
  </header>
  <div class="col-sm-8 col-md-12 col-lg-8">
    <h2>${data.title}</h2>
    <p>${data.info}</p>
  <footer>
    <a class="btn btn-default" href="#">Read More</a>
    <a class="btn btn-primary btn-lg" href="#">Web</a>
    <a class="btn btn-success btn-sm" href="#">Gallery</a>
  </footer>
  </div> <!-- right col -->
</div> <!-- nested row -->
</section>`;
}

const loadItems = (itemsList)=>{
    return itemsList.map((item)=>createItemTpl(item)).join('');
}

const fetchGalleryItems = ()=>{
  //            http://site.com/api/g1
  return $.get('./data.json')
}

export const renderGallery = (galleryId)=>{
    fetchGalleryItems()
      .then((data)=>{
        console.log(`render:${galleryId}`, data.g2);
        $('#main')
        //.html(loadItems(eval("data." + galleryId )))
        .html(loadItems( data[galleryId] ))
        .find('.item')
        .each((index, item)=>{
          $(item)
            .css({'opacity':'0', 'top':'50px'})
            .animate({'opacity':'1', 'top':'0'}, index * 500);
      }); 
    })
    .catch((error)=>console.log(error));
    
}

