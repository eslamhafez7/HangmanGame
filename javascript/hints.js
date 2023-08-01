const wordHints = {
    javascript: "A popular programming language for web development.",
    python: "A versatile and widely used programming language.",
    java: "An object-oriented programming language used for various applications.",
    csharp: "A programming language developed by Microsoft.",
    html: "A markup language used for creating web pages.",
    css: "A style sheet language used to control the presentation of web pages.",
    ruby: "A dynamic, open-source programming language.",
    php: "A server-side scripting language for web development.",
    swift: "A programming language used to develop iOS applications.",
    typescript: "A typed superset of JavaScript, used to enhance JS code.",
    avatar: "A science fiction film directed by James Cameron.",
    titanic: "A romantic drama film about the ill-fated ship RMS Titanic.",
    inception: "A mind-bending science fiction film directed by Christopher Nolan.",
    jaws: "A thriller film about a giant man-eating great white shark.",
    starwars: "A popular sci-fi film franchise created by George Lucas.",
    thegodfather: "A classic crime film directed by Francis Ford Coppola.",
    jurassicpark: "An adventure film about a theme park with cloned dinosaurs.",
    avengers: "A superhero film based on the Marvel Comics superhero team.",
    frozen: "An animated musical film produced by Walt Disney Animation Studios.",
    harrypotter: "A fantasy film series based on the novels by J.K. Rowling.",
    interstellar: "A science fiction film directed by Christopher Nolan.",
    picasso: "A famous Spanish painter and sculptor.",
    shakespeare: "A renowned playwright and poet from England.",
    mariecurie: "A pioneering physicist and chemist, famous for her research on radioactivity.",
    nelsonmandela: "An anti-apartheid revolutionary and politician who served as South Africa's president.",
    mozart: "A prolific and influential composer of the Classical era.",
    cleopatra: "The last active ruler of the Ptolemaic Kingdom of Egypt.",
    "albert einstein": "A theoretical physicist, known for the theory of relativity.",
    leonardodavinci: "A polymath known for his artistic and scientific achievements.",
    napoleon: "A military and political leader who rose to prominence during the French Revolution.",
    beethoven: "A renowned composer and pianist from the Classical era.",
    egypt: "A country in northeastern Africa known for its ancient civilization.",
    palestine: "A region in the Middle East with a complex political and cultural history.",
    qatar: "A country in the Middle East known for its wealth and modern architecture.",
    australia: "A country and continent known for its unique wildlife and landscapes.",
    canada: "A country in North America known for its vast wilderness and multiculturalism.",
    germany: "A European country known for its engineering and cultural heritage.",
    japan: "An East Asian country known for its traditional arts and modern technology.",
    brazil: "A country in South America known for its diverse culture and Amazon rainforest.",
    france: "A European country known for its art, fashion, and cuisine.",
    india: "A South Asian country known for its diverse culture and history.",
    mexico: "A country in North America known for its rich history and cuisine.",
    russia: "The largest country in the world, known for its rich history and vast landscapes.",
    sweden: "A Nordic country known for its design, welfare system, and natural beauty.",
    elephant: "A large herbivorous mammal with distinctive long tusks.",
    tiger: "A large carnivorous cat with distinctive stripes.",
    giraffe: "A tall African mammal with a long neck and spotted coat.",
    dolphin: "A highly intelligent marine mammal known for its playful behavior.",
    penguin: "A flightless bird that lives in the Southern Hemisphere.",
    koala: "A marsupial native to Australia, known for its eucalyptus diet.",
    lion: "A large and majestic carnivorous cat, often referred to as the 'king of the jungle.'",
    zebra: "An African mammal with black and white stripes.",
    kangaroo: "A marsupial known for its powerful hind legs and pouch.",
    panda: "A bear native to China, known for its distinctive black and white fur.",
    apple: "A sweet and crunchy fruit commonly found in various varieties.",
    banana: "A tropical fruit with a yellow curved shape.",
    orange: "A citrus fruit known for its juicy and refreshing taste.",
    strawberry: "A small, red, and sweet fruit often used in desserts.",
    grape: "A small, juicy fruit often found in clusters.",
    watermelon: "A large fruit with sweet, juicy flesh and green rind.",
    mango: "A tropical fruit with a sweet and rich flavor.",
    pineapple: "A tropical fruit with a spiky, rough exterior and sweet interior.",
    kiwi: "A small, brown, and fuzzy fruit with green flesh.",
    peach: "A soft and juicy fruit with a fuzzy, velvety skin.",
    red: "A primary color often associated with love and passion.",
    blue: "A primary color often associated with calmness and tranquility.",
    green: "A color associated with nature and growth.",
    yellow: "A bright color often associated with happiness and sunshine.",
    orange: "A color between red and yellow, often associated with energy and warmth.",
    purple: "A color often associated with royalty and luxury.",
    pink: "A color often associated with femininity and sweetness.",
    brown: "A color associated with earthiness and stability.",
    black: "A color often associated with mystery and elegance.",
    white: "A color often associated with purity and innocence.",
    toyota: "A Japanese automotive manufacturer known for its reliability.",
    honda: "A Japanese company known for its motorcycles and automobiles.",
    ford: "An American automaker known for its iconic models.",
    audi: "A German luxury automobile manufacturer.",
    bmw: "A German company known for its luxury vehicles and motorcycles.",
    mercedes: "A German brand known for luxury cars and commercial vehicles.",
    nissan: "A Japanese car manufacturer known for its wide range of vehicles.",
    chevrolet: "An American brand known for its diverse vehicle lineup.",
    volkswagen: "A German automaker known for its iconic Beetle and Golf models.",
    hyundai: "A South Korean brand known for its affordable and reliable cars.",
    borchy: "A fictional car brand created for this game.",
    spiderman: "A superhero known for his spider-like abilities.",
    superman: "A superhero with superhuman strength and powers.",
    batman: "A vigilante superhero with no superpowers, known for his gadgets and intelligence.",
    wonderwoman: "A superheroine known for her strength and Lasso of Truth.",
    ironman: "A superhero with a powered exoskeleton suit.",
    thor: "A superhero based on the Norse god of thunder.",
    captainamerica: "A superhero known for his shield and leadership.",
    blackpanther: "A superhero and king of the fictional African nation of Wakanda.",
    hulk: "A superhero with superhuman strength and a tendency to transform into a green giant.",
    flash: "A superhero known for his super speed.",
};

function showHint(word) {
    const hint = wordHints[word.toLowerCase()];
    Swal.fire({
        icon: 'info',
        title: 'Hint',
        text: hint,
        confirmButtonText: 'Got it!',
    });
}

