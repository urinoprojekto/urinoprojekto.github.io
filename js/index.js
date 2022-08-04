const { Tolgee, IcuFormatter } = window['@tolgee/core'];
const tg = Tolgee.use(IcuFormatter).init({
  //apiUrl: 'https://app.tolgee.io',
  //apiKey: ':P',

  defaultLanguage: 'en',
  inputPrefix: '{{',
  inputSuffix: '}}',
  watch: false,
});

tg.run().then(() => {
	document.getElementsByTagName("html")[0].style.visibility = "visible";
});

tg.onLangLoaded.subscribe(() => {
	//
});

$('.lang').click(function() {
	tg.lang = $(this).attr("value");
});

new Calamansi(document.querySelector('.calamansi'), {
        skin: '/js/skins/calamansi',
        playlists: {
            'Classics': [
                {
                    source: '/audio/_test/Aidosurinapopleksio.mp3',
                },
                {
                    source: '/audio/_test/Атомный Хуй.mp3',
                },
                {
                    source: '/audio/_test/Записка.mp3',
                },
                {
                    source: '/audio/_test/Ночь.mp3',
                },
                {
                    source: '/audio/_test/Яйца лучше с майонезом.mp3',
                },
            ],
        },
        defaultAlbumCover: '/audio/_test/thumb.jpg',
    });
