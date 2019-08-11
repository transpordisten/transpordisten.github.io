$(function(){
  $(".typeahead").typeahead({
    source: [
      {id: "id1", name: "Margerita"},
      {id: "id2", name: "Champinjonpizza"},
      {id: "id3", name: "Vesuvio"},
      {id: "id4", name: "Räkpizza"},
      {id: "id5", name: "Pescatore"},
      {id: "id6", name: "Hawaii"},
      {id: "id7", name: "Capricciosa"},
      {id: "id8", name: "Bussola"},
      {id: "id9", name: "Opera"},
      {id: "id10", name: "Milano"},
      {id: "id11", name: "Napoletana"},
      {id: "id12", name: "Oriental"},
      {id: "id13", name: "Vegetarisk Pizza"},
      {id: "id14", name: "Salami Pizza"},
      {id: "id15", name: "Boscaiola"},
      {id: "id16", name: "Roma"},
      {id: "id17", name: "Alonzo"},
      {id: "id18", name: "Mexikansk Pizza"},
      {id: "id19", name: "Marinara"},
      {id: "id20", name: "Alfredo"},
      {id: "id21", name: "Pepperonikorv Pizza"},
      {id: "id22", name: "Quattro Stagioni"},
      {id: "id23", name: "Quattro Formaggi"},
      {id: "id24", name: "Mama Mia"},
      {id: "id25", name: "Hawaii Special"},
      {id: "id26", name: "Umeå Special"},
      {id: "id27", name: "Mexikansk Special"},
      {id: "id29", name: "Acapulco"},
      {id: "id30", name: "Sahara"},
      {id: "id31", name: "Verdi"},
      {id: "id32", name: "Mango Pizza"},
      {id: "id33", name: "Chicken Pizza"},
      {id: "id34", name: "Altona"},
      {id: "id35", name: "Florans"},
      {id: "id36", name: "Havets Pizza"},
      {id: "id37", name: "Hot Pepper"},
      {id: "id38", name: "Löv Pizza"},
      {id: "id39", name: "Catane"},
      {id: "id40", name: "Bologna"},
      {id: "id41", name: "Ubåt"},
      {id: "id42", name: "Vesuvio (Barn)"},
      {id: "id43", name: "Hawaii (Barn)"},
      {id: "id44", name: "Bussola (Barn)"},
      {id: "id45", name: "Capricciosa (Barn)"},
      {id: "id46", name: "Calzone (Inbakad, Barn)"},
      {id: "id47", name: "Calzone (Inbakad)"},
      {id: "id48", name: "Calzoncino (Inbakad)"},
      {id: "id49", name: "Räk Calzone (Inbakad)"},
      {id: "id50", name: "Hawaii (Inbakad)"},
      {id: "id51", name: "Vegetarisk Pizza (Inbakad)"},
      {id: "id52", name: "Mexikansk Pizza (Inbakad)"},
      {id: "id53", name: "Calzone Special (Inbakad)"},
      {id: "id54", name: "Calzone Italiano (Inbakad)"},
      {id: "id55", name: "Apollo (Inbakad)"},
      {id: "id56", name: "Disco (Inbakad)"},
      {id: "id57", name: "Jätte Calzone (Inbakad)"},
      {id: "id58", name: "Vegetarisk (Pan-Pizza)"},
      {id: "id59", name: "Spicy Hot One (Pan-Pizza)"},
      {id: "id60", name: "Amerikansk Special (Pan-Pizza)"},
      {id: "id61", name: "Super Supreme (Pan-Pizza)"},
      {id: "id62", name: "Pizza In (Pan-Pizza)"},
      {id: "id63", name: "Super Hawaii (Pan-Pizza)"},
      {id: "id64", name: "Margarita (Rull-Pizza)"},
      {id: "id65", name: "Vesuvio (Rull-Pizza)"},
      {id: "id66", name: "Räkpizza (Rull-Pizza)"},
      {id: "id67", name: "Champinjonpizza (Rull-Pizza)"},
      {id: "id68", name: "Hawaii (Rull-Pizza)"},
      {id: "id69", name: "Capricciosa (Rull-Pizza)"},
      {id: "id70", name: "Vegetarisk (Rull-Pizza)"},
      {id: "id71", name: "Kycklingrulle (Rull-Pizza)"},
      {id: "id72", name: "Kebabpizza"},
      {id: "id73", name: "Umeå Special Kebabpizza"},
      {id: "id74", name: "Julia"},
      {id: "id75", name: "Husets Kebabpizza"},
      {id: "id76", name: "Kebabtallrik"},
      {id: "id77", name: "Kebabrulle"},
      {id: "id78", name: "Kebab Inbakad (Halvinbakad)"},
      {id: "id79", name: "Grekisk Kebabrulle"},
      {id: "id80", name: "Super Kebabrulle"},
      {id: "id81", name: "Kyckling Inbakad"},
      {id: "id82", name: "Jättekebab"},
      {id: "id83", name: "Vanlig Kebab"},
      {id: "id84", name: "Guxne Special"},
      {id: "id85", name: "Falafelrulle"},
      {id: "id86", name: "Falafeltallrik"},
      {id: "id87", name: "Skrovmål 2x45g"},
      {id: "id88", name: "Superskrovmål 2x90g"},
      {id: "id89", name: "Barnskrovmål 45g"},
      {id: "id90", name: "Grillkorvtallrik"},
      {id: "id91", name: "Veganburgare"},
      {id: "id92", name: "Lövbit"},
      {id: "id93", name: "Grekisk Sallad"},
      {id: "id94", name: "Caesarsallad"},
      {id: "id95", name: "Räksallad"},
      {id: "id96", name: "Spagetti Bolognese"},
      {id: "id97", name: "Lasagne"},
      {id: "id98", name: "Spagetti Carbonara"},
      {id: "id99", name: "Vegetarisk Pasta"},
      {id: "id100", name: "Currykyckling Pasta"},
      {id: "id101", name: "Oxfilépasta"},
      {id: "id102", name: "Amerikansk"},
      {id: "id103", name: "Amerikansk"},
      {id: "id104", name: "Amerikansk"},
      {id: "id105", name: "Amerikansk"},
      {id: "id106", name: "Amerikansk"},
      {id: "id107", name: "Amerikansk"},
      {id: "id108", name: "Amerikansk"},
      {id: "id109", name: "Amerikansk"},
      {id: "id110", name: "Amerikansk"},
    ]
  });

  $(".typeahead").typeahead({

    // data source
    source: [],

    // how many items to show
    items: 8,

    // default template
    menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
    item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
    headerHtml: '<li class="dropdown-header"></li>',
    headerDivider: '<li class="divider" role="separator"></li>',
    itemContentSelector:'a',

    // min length to trigger the suggestion list
    minLength: 1,

    // number of pixels the scrollable parent container scrolled down
    scrollHeight: 0,

    // auto selects the first item
    autoSelect: true,

    // callbacks
    afterSelect: $.noop,
    afterEmptySelect: $.noop,

    // adds an item to the end of the list
    addItem: false,

    // delay between lookups
    delay: 0,

  });


});
