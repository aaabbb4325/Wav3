var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Bing",
      "url": "/search.html?q=https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "/search.html?q=https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "/search.html?q=https://web.telegram.org/a/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      "id": "guilded",
      "title": "Guilded",
      "url": "/search.html?q=https://www.guilded.gg/",
      'image': 'https://yt3.googleusercontent.com/cPlwwgZkQQgHRLAg7jvJG4yKGLDId6NH7H_S87TCoEV_dbsF9Me_4YSBL5DyMsndx6hzoZxHUw=s176-c-k-c0x00ffffff-no-rj'
    },
    {
      "id": "geforce",
      "title": "GeForce NOW (may not work)",
      "url": "/search.html?q=https://play.geforcenow.com",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png'
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': '/search.html?q=https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "/search.html?q=https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "/search.html?q=https://reddit.com",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "/search.html?q=https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "/search.html?q=https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': '/search.html?q=https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': '/search.html?q=https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'movie-web',
      'title': 'movie-web',
      'url': '/search.html?q=http://movie-web.app/',
      'image': 'https://github.com/movie-web/movie-web/blob/dev/public/android-chrome-512x512.png?raw=true'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': '/search.html?q=https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': '/search.html?q=https://win11.blueedge.me/',
      "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
      "description": "A remake of the Windows 11 UI in React.js"
    },
    {
      'id': 'win10',
      'title': 'Windows 10 in React',
      'url': '/search.html?q=https://win-10.vercel.app/',
      "image": "https://downlody.com/windows/files/image/Windows-10-icon.png",
      "description": "Windows 10 recreation in React.js"
    },
    {
      'id': 'winxp',
      'title': 'Windows XP in React',
      'url': '/search.html?q=https://www.oonjaa.com/',
      "image": "https://archive.org/services/img/1d9464dbff7a1630882d0e2090cb714c",
      "description": "Windows XP recreation in React.js"
    },
    {
      'id': 'gbaemulator',
      'title': 'GBA Emulator',
      'url': '/search.html?q=https://cattn.github.io/gba',
      "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
      "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
    }
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
