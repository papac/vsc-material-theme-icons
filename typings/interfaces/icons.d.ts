export interface IIcon {
  /**
   * Icon filename
   * @type {string}
   * @memberof IIcon
   */
  filename: string;
  /**
   * If set to true, the icon is marked as last
   * @type {boolean}
   * @memberof IIcon
   */
  last: boolean;
  /**
   * Icon's name
   * @type {string}
   * @memberof IIcon
   */
  name: string;
}

export interface IThemeIconsItem {
  iconPath: string;
}

export interface IThemeIconsAccents {
  iconDefinitions: {
    _folder_open: IThemeIconsItem;
    _folder_open_build: IThemeIconsItem;
  };
}

export interface IThemeIconsAccents {
  iconDefinitions: {
    _folder_open: IThemeIconsItem;
    _folder_open_build: IThemeIconsItem;
  };
}

export interface IThemeIconsVariants {
  iconDefinitions: {
    _folder_dark: IThemeIconsItem;
    _folder_dark_build: IThemeIconsItem;
    _folder_light: IThemeIconsItem;
    _folder_light_build: IThemeIconsItem;
    _folder_vscode: IThemeIconsItem;
    _folder_gulp: IThemeIconsItem;
    _folder_node: IThemeIconsItem;
    _folder_images: IThemeIconsItem;
    _folder_js: IThemeIconsItem;
    _folder_src: IThemeIconsItem;
    _folder_assets: IThemeIconsItem;
  };
}

export interface IThemeIconsIconPath {
  iconPath: string;
}

export interface IThemeIconsJSON {
  iconDefinitions: {
    _folder_dark: IThemeIconsIconPath;
    _file_folder: IThemeIconsIconPath;
    _folder_dark_build: IThemeIconsIconPath;
    _folder_light: IThemeIconsIconPath;
    _folder_light_build: IThemeIconsIconPath;
    _folder_open: IThemeIconsIconPath;
    _folder_open_build: IThemeIconsIconPath;
    _file_dark: IThemeIconsIconPath;
    _file_actionscript: IThemeIconsIconPath;
    _file_ai: IThemeIconsIconPath;
    _file_android: IThemeIconsIconPath;
    _file_angular: IThemeIconsIconPath;
    _file_applescript: IThemeIconsIconPath;
    _file_arduino: IThemeIconsIconPath;
    _file_assembly: IThemeIconsIconPath;
    _file_autohotkey: IThemeIconsIconPath;
    _file_c: IThemeIconsIconPath;
    _file_certificate: IThemeIconsIconPath;
    _file_changelog: IThemeIconsIconPath;
    _file_clojure: IThemeIconsIconPath;
    _file_cmake: IThemeIconsIconPath;
    _file_cmd: IThemeIconsIconPath;
    _file_coffee: IThemeIconsIconPath;
    _file_console: IThemeIconsIconPath;
    _file_contributing: IThemeIconsIconPath;
    _file_cpp: IThemeIconsIconPath;
    _file_credits: IThemeIconsIconPath;
    _file_csharp: IThemeIconsIconPath;
    '_file_css-map': IThemeIconsIconPath;
    _file_css: IThemeIconsIconPath;
    _file_dart: IThemeIconsIconPath;
    _file_database: IThemeIconsIconPath;
    _file_dlang: IThemeIconsIconPath;
    _file_docker: IThemeIconsIconPath;
    _file_document: IThemeIconsIconPath;
    _file_email: IThemeIconsIconPath;
    _file_exe: IThemeIconsIconPath;
    _file_favicon: IThemeIconsIconPath;
    _file_file: IThemeIconsIconPath;
    _file_flash: IThemeIconsIconPath;
    _file_flow: IThemeIconsIconPath;
    '_file_folder-build': IThemeIconsIconPath;
    '_file_folder-light-build': IThemeIconsIconPath;
    '_file_folder-light': IThemeIconsIconPath;
    '_file_folder-outline-build': IThemeIconsIconPath;
    '_file_folder-outline': IThemeIconsIconPath;
    _file_font: IThemeIconsIconPath;
    _file_fsharp: IThemeIconsIconPath;
    _file_git: IThemeIconsIconPath;
    _file_github: IThemeIconsIconPath;
    _file_go: IThemeIconsIconPath;
    _file_gopher: IThemeIconsIconPath;
    _file_gradle: IThemeIconsIconPath;
    _file_graphql: IThemeIconsIconPath;
    _file_groovy: IThemeIconsIconPath;
    _file_grunt: IThemeIconsIconPath;
    _file_gulp: IThemeIconsIconPath;
    _file_haml: IThemeIconsIconPath;
    _file_haskell: IThemeIconsIconPath;
    _file_html: IThemeIconsIconPath;
    _file_image: IThemeIconsIconPath;
    _file_ionic: IThemeIconsIconPath;
    _file_java: IThemeIconsIconPath;
    '_file_javascript-map': IThemeIconsIconPath;
    _file_js: IThemeIconsIconPath;
    _file_json: IThemeIconsIconPath;
    _file_key: IThemeIconsIconPath;
    _file_kotlin: IThemeIconsIconPath;
    _file_less: IThemeIconsIconPath;
    _file_lib: IThemeIconsIconPath;
    _file_license: IThemeIconsIconPath;
    _file_lua: IThemeIconsIconPath;
    _file_markdown: IThemeIconsIconPath;
    _file_markup: IThemeIconsIconPath;
    _file_movie: IThemeIconsIconPath;
    _file_music: IThemeIconsIconPath;
    _file_mustache: IThemeIconsIconPath;
    _file_mxml: IThemeIconsIconPath;
    _file_nodejs: IThemeIconsIconPath;
    _file_npm: IThemeIconsIconPath;
    _file_ocaml: IThemeIconsIconPath;
    _file_pdf: IThemeIconsIconPath;
    _file_php: IThemeIconsIconPath;
    _file_polymer: IThemeIconsIconPath;
    _file_postcss: IThemeIconsIconPath;
    _file_powerpoint: IThemeIconsIconPath;
    _file_pp: IThemeIconsIconPath;
    _file_procfile: IThemeIconsIconPath;
    _file_pug: IThemeIconsIconPath;
    _file_python: IThemeIconsIconPath;
    _file_r: IThemeIconsIconPath;
    _file_rails: IThemeIconsIconPath;
    _file_raml: IThemeIconsIconPath;
    _file_react: IThemeIconsIconPath;
    _file_readme: IThemeIconsIconPath;
    _file_ruby: IThemeIconsIconPath;
    _file_rust: IThemeIconsIconPath;
    _file_sass: IThemeIconsIconPath;
    _file_settings: IThemeIconsIconPath;
    _file_sketch: IThemeIconsIconPath;
    _file_star: IThemeIconsIconPath;
    _file_stylus: IThemeIconsIconPath;
    _file_sublime: IThemeIconsIconPath;
    _file_svg: IThemeIconsIconPath;
    _file_swc: IThemeIconsIconPath;
    _file_swift: IThemeIconsIconPath;
    _file_swig: IThemeIconsIconPath;
    _file_table: IThemeIconsIconPath;
    _file_tex: IThemeIconsIconPath;
    _file_todo: IThemeIconsIconPath;
    _file_tune: IThemeIconsIconPath;
    _file_twig: IThemeIconsIconPath;
    _file_typescript: IThemeIconsIconPath;
    _file_typescript_def: IThemeIconsIconPath;
    _file_url: IThemeIconsIconPath;
    _file_virtual: IThemeIconsIconPath;
    _file_visualstudio: IThemeIconsIconPath;
    _file_vue: IThemeIconsIconPath;
    _file_webpack: IThemeIconsIconPath;
    _file_word: IThemeIconsIconPath;
    _file_xaml: IThemeIconsIconPath;
    _file_xml: IThemeIconsIconPath;
    _file_yaml: IThemeIconsIconPath;
    _file_yarn: IThemeIconsIconPath;
    _file_zip: IThemeIconsIconPath;
  };
  fileExtensions: {
    cmd: string;
    mustache: string;
    rails: string;
    styl: string;
    twig: string;
    swig: string;
    sketch: string;
    do: string;
    'sublime-settings': string;
    'sublime-theme': string;
    'sublime-commands': string;
    'sublime-menu': string;
    html: string;
    jade: string;
    pug: string;
    md: string;
    'md.rendered': string;
    markdown: string;
    'markdown.rendered': string;
    css: string;
    postcss: string;
    scss: string;
    sass: string;
    less: string;
    json: string;
    yaml: string;
    'YAML-tmLanguage': string;
    yml: string;
    xml: string;
    plist: string;
    xsd: string;
    dtd: string;
    xsl: string;
    xslt: string;
    resx: string;
    iml: string;
    xquery: string;
    tmLanguage: string;
    png: string;
    jpeg: string;
    jpg: string;
    gif: string;
    svg: string;
    eps: string;
    ai: string;
    ico: string;
    tif: string;
    tiff: string;
    psd: string;
    psb: string;
    ami: string;
    apx: string;
    bmp: string;
    bpg: string;
    brk: string;
    cur: string;
    dds: string;
    dng: string;
    exr: string;
    fpx: string;
    gbr: string;
    img: string;
    jbig2: string;
    jb2: string;
    jng: string;
    jxr: string;
    pbm: string;
    pgf: string;
    pic: string;
    raw: string;
    webp: string;
    php: string;
    js: string;
    ejs: string;
    jsx: string;
    ini: string;
    dlc: string;
    dll: string;
    config: string;
    conf: string;
    esx: string;
    ts: string;
    tsx: string;
    'd.ts': string;
    pdf: string;
    xlsx: string;
    xls: string;
    csv: string;
    vscodeignore: string;
    'vscodeignore-sync': string;
    vsixmanifest: string;
    suo: string;
    sln: string;
    pdb: string;
    cs: string;
    csx: string;
    csproj: string;
    zip: string;
    tar: string;
    gz: string;
    xz: string;
    bzip2: string;
    gzip: string;
    '7z': string;
    '7zip': string;
    pzip: string;
    wim: string;
    rar: string;
    tgz: string;
    exe: string;
    msi: string;
    java: string;
    jar: string;
    jsp: string;
    c: string;
    h: string;
    m: string;
    cc: string;
    cpp: string;
    'c++': string;
    hpp: string;
    mm: string;
    cxx: string;
    go: string;
    py: string;
    url: string;
    sh: string;
    bat: string;
    ps1: string;
    fish: string;
    bash: string;
    gradle: string;
    doc: string;
    docx: string;
    rtf: string;
    properties: string;
    prop: string;
    settings: string;
    sql: string;
    accdb: string;
    mdb: string;
    cer: string;
    cert: string;
    crt: string;
    pub: string;
    key: string;
    pem: string;
    asc: string;
    woff: string;
    woff2: string;
    ttf: string;
    eot: string;
    suit: string;
    otf: string;
    bmap: string;
    fnt: string;
    odttf: string;
    ttc: string;
    font: string;
    fonts: string;
    sui: string;
    ntf: string;
    mrf: string;
    lib: string;
    rb: string;
    erb: string;
    fs: string;
    fsx: string;
    fsi: string;
    fsproj: string;
    manifest: string;
    swift: string;
    ino: string;
    dockerignore: string;
    'dockerignore-sync': string;
    tex: string;
    bib: string;
    pptx: string;
    ppt: string;
    pptm: string;
    potx: string;
    pot: string;
    potm: string;
    ppsx: string;
    ppsm: string;
    pps: string;
    ppam: string;
    ppa: string;
    webm: string;
    mkv: string;
    flv: string;
    vob: string;
    ogv: string;
    ogg: string;
    gifv: string;
    avi: string;
    mov: string;
    qt: string;
    wmv: string;
    yuv: string;
    rm: string;
    rmvb: string;
    mp4: string;
    m4v: string;
    mpg: string;
    mp2: string;
    mpeg: string;
    mpe: string;
    mpv: string;
    m2v: string;
    vdi: string;
    vbox: string;
    'vbox-prev': string;
    ics: string;
    mp3: string;
    flac: string;
    m4a: string;
    wma: string;
    aiff: string;
    coffee: string;
    txt: string;
    sqlite: string;
    graphql: string;
    gql: string;
    props: string;
    toml: string;
    rs: string;
    raml: string;
    xaml: string;
    prefs: string;
    hs: string;
    kt: string;
    project: string;
    patch: string;
    dockerfile: string;
    vb: string;
    lua: string;
    clj: string;
    groovy: string;
    r: string;
    rst: string;
    dart: string;
    as: string;
    mxml: string;
    ahk: string;
    swf: string;
    swc: string;
    cmake: string;
    asm: string;
    a51: string;
    inc: string;
    nasm: string;
    s: string;
    ms: string;
    agc: string;
    ags: string;
    aea: string;
    argus: string;
    mitigus: string;
    binsource: string;
    vue: string;
    ml: string;
    mli: string;
    cmx: string;
    'js.map': string;
    'css.map': string;
    tmTheme: string;
    pp: string;
    applescript: string;
    haml: string;
  };
  fileNames: {
    'gruntfile.js': string;
    'webpack.js': string;
    'webpack.config.js': string;
    'webpack.dev.js': string;
    'webpack.prod.js': string;
    'webpack.common.js': string;
    'webpackfile.js': string;
    'ionic.config.json': string;
    '.io-config.json': string;
    'gulpfile.js': string;
    'gulpfile.babel.js': string;
    'package.json': string;
    'gradle.properties': string;
    gradlew: string;
    '.jscsrc': string;
    '.jshintrc': string;
    '.jshintignore': string;
    '.jshintignore-sync': string;
    '.npmignore': string;
    '.npmignore-sync': string;
    'tsconfig.json': string;
    'tslint.json': string;
    'androidmanifest.xml': string;
    'gradle-wrapper.properties': string;
    '.editorconfig': string;
    procfile: string;
    '.env': string;
    dockerfile: string;
    license: string;
    'license.md': string;
    'license.md.rendered': string;
    'license.txt': string;
    '.babelrc': string;
    '.eslintrc': string;
    '.buildignore': string;
    '.buildignore-sync': string;
    '.htaccess': string;
    'composer.lock': string;
    '.gitignore': string;
    '.gitignore-sync': string;
    '.gitconfig': string;
    '.gitattributes': string;
    '.gitmodules': string;
    '.gitkeep': string;
    'yarn.lock': string;
    '.yarnclean': string;
    '.yarn-integrity': string;
    'yarn-error.log': string;
    'contributing.md': string;
    'contributing.md.rendered': string;
    'readme.md': string;
    'readme.md.rendered': string;
    '.mailmap': string;
    makefile: string;
    changelog: string;
    'changelog.md': string;
    'changelog.md.rendered': string;
    CREDITS: string;
    'credits.txt': string;
    'credits.md': string;
    'credits.md.rendered': string;
    '.flowconfig': string;
    '.jsbeautifyrc': string;
    'git-history': string;
    'angular-cli.json': string;
    'app.module.ts': string;
    'favicon.ico': string;
  };
  file: string;
    folder: string;
    folderExpanded: string;
    languageIds:
  { git: string };
  light: {
    folderExpanded: string;
    folder: string;
    folderNames: {
      node_modules: string;
      '.git': string;
      '.github': string;
      '.gulp': string;
      build: string;
      dist: string;
    };
    folderNamesExpanded: {
      node_modules: string;
      '.git': string;
      '.github': string;
      '.gulp': string;
      build: string;
      dist: string;
    };
  };
  folderNames: {
    node_modules: string;
    '.git': string;
    '.github': string;
    '.gulp': string;
    build: string;
    dist: string;
  };
  folderNamesExpanded: {
    node_modules: string;
    '.git': string;
    '.github': string;
    '.gulp': string;
    build: string;
    dist: string;
  };
}
