const quizDataFromFile = [
  {
    "question": "abbiegen, biegt ab, bog ab, ist abgebogen",
    "correct": "to turn off, bend",
    "choices": [
      "to turn off, bend",
      "to pronounce",
      "to take place",
      "next to"
    ]
  },
  {
    "question": "abfahren, fährt ab, fuhr ab, ist abgefahren",
    "correct": "to depart",
    "choices": [
      "to go biking",
      "to shoot, kick",
      "to depart",
      "outside"
    ]
  },
  {
    "question": "abgeben, gibt ab, gab ab, hat abgegeben",
    "correct": "to hand in",
    "choices": [
      "to hand in",
      "to flee",
      "to watch television",
      "to jump"
    ]
  },
  {
    "question": "abhängen, hängt ab, hing ab, hat abgehangen",
    "correct": "to take down, uncouple, depend upon",
    "choices": [
      "to take down, uncouple, depend upon",
      "to break in",
      "to eat (for animals)",
      "to seize, hold fast"
    ]
  },
  {
    "question": "abheben, hebt ab, hob ab, hat abgehoben",
    "correct": "to lift (up)",
    "choices": [
      "to wash",
      "misunderstand",
      "to lift (up)",
      "outside"
    ]
  },
  {
    "question": "abnehmen, nimmt ab, nahm ab, hat abgenommen",
    "correct": "to take off, remove, take away, loose weight",
    "choices": [
      "to take off, remove, take away, loose weight",
      "note",
      "indoor, inside",
      "to transfer, refer"
    ]
  },
  {
    "question": "abwaschen, wäscht ab, wusch ab, hat abgewaschen",
    "correct": "wash up",
    "choices": [
      "wash up",
      "to get up",
      "that is why",
      "to live separate lives"
    ]
  },
  {
    "question": "anbieten, bietet an, bot an, hat angeboten",
    "correct": "to offer",
    "choices": [
      "to offer",
      "to drive",
      "cope, manage",
      "to do (something), to undertake, to make"
    ]
  },
  {
    "question": "anfangen, fängt an, fing an, hat angefangen",
    "correct": "to begin",
    "choices": [
      "to turn off, bend",
      "cheat",
      "to begin",
      "to leave"
    ]
  },
  {
    "question": "angeben, gibt an, gab an, hat angegeben",
    "correct": "to boast",
    "choices": [
      "to boast",
      "to connect, combine, bandage",
      "to run over",
      "a bit"
    ]
  },
  {
    "question": "ankommen, kommt an, kam an, ist angekommen",
    "correct": "to arrive",
    "choices": [
      "to take, take up",
      "misunderstand",
      "to lie",
      "to arrive"
    ]
  },
  {
    "question": "anrufen, ruft an, rief an, hat angerufen",
    "correct": "to telephone, call, call out",
    "choices": [
      "to telephone, call, call out",
      "to begin",
      "to present",
      "to speak, talk"
    ]
  },
  {
    "question": "anschließen, schließt an, schloss an, hat angeschlossen",
    "correct": "to connect",
    "choices": [
      "to drink",
      "to give in, give up",
      "yesterday",
      "to connect"
    ]
  },
  {
    "question": "ansehen, sieht an, sah an, hat angesehen",
    "correct": "to look at",
    "choices": [
      "to play sport",
      "to look at",
      "yesterday",
      "to do (something), to undertake, to make"
    ]
  },
  {
    "question": "ansprechen, spricht an, sprach an, hat angesprochen",
    "correct": "to speak to",
    "choices": [
      "to speak to",
      "to drive",
      "to take off, remove, take away, loose weight",
      "wash up"
    ]
  },
  {
    "question": "anziehen, zieht an, zog an, hat angezogen",
    "correct": "to dress",
    "choices": [
      "be divorced",
      "to dress",
      "to undress",
      "to close, shut"
    ]
  },
  {
    "question": "auffallen, fällt auf, fiel auf, ist aufgefallen",
    "correct": "to be noticeable, make an impression",
    "choices": [
      "to water",
      "to be located",
      "to be noticeable, make an impression",
      "to be able to"
    ]
  },
  {
    "question": "aufgeben, gibt auf, gab auf, hat aufgegeben",
    "correct": "to give in, give up",
    "choices": [
      "to water",
      "to give in, give up",
      "to run",
      "to go for a walk"
    ]
  },
  {
    "question": "aufhalten, hält auf, hielt auf, hat aufgehalten",
    "correct": "to detain, check, hold/ keep open",
    "choices": [
      "to give",
      "to transfer, refer",
      "to detain, check, hold/ keep open",
      "to leave, allow, stop, have something done"
    ]
  },
  {
    "question": "aufheben, hebt auf, hob auf, hat aufgehoben",
    "correct": "to raise, lift, wind up, abolish",
    "choices": [
      "to move in, draw in, take in",
      "to raise, lift, wind up, abolish",
      "to suffer",
      "to argue"
    ]
  },
  {
    "question": "aufnehmen, nimmt auf, nahm auf, hat aufgenommen",
    "correct": "to receive, pick up, admit, include",
    "choices": [
      "to receive, pick up, admit, include",
      "to understand",
      "to ride",
      "to shove, push, knock, bump"
    ]
  },
  {
    "question": "auf sein, ist auf, war auf, ist auf gewesen",
    "correct": "to be up",
    "choices": [
      "outside, outwards",
      "to see",
      "to be up",
      "to announce publicly"
    ]
  },
  {
    "question": "aufstehen, steht auf, stand auf, ist aufgestanden",
    "correct": "to get up",
    "choices": [
      "to rise, climb",
      "to let someone know (tell someone)",
      "to get up",
      "to look up"
    ]
  },
  {
    "question": "auftreten, tritt auf, trat auf, ist aufgetreten",
    "correct": "occur",
    "choices": [
      "occur",
      "to receive",
      "to begin",
      "to do too much sport"
    ]
  },
  {
    "question": "ausfallen, fällt aus, fiel aus, ist ausgefallen",
    "correct": "canceled, fall out, drop out",
    "choices": [
      "to receive, get",
      "canceled, fall out, drop out",
      "own, peculiar, particular",
      "to write down"
    ]
  },
  {
    "question": "ausgeben, gibt aus, gab aus, hat ausgegeben",
    "correct": "spend",
    "choices": [
      "divorced",
      "above, upstairs",
      "on my account, as far as I'm concerned",
      "spend"
    ]
  },
  {
    "question": "ausgehen, geht aus, ging aus, ist ausgegangen",
    "correct": "go out",
    "choices": [
      "to scream",
      "go out",
      "to eat",
      "to break in"
    ]
  },
  {
    "question": "ausschließen, schließt aus, schloss aus, hat ausgeschlossen",
    "correct": "to exclude, rule out",
    "choices": [
      "to be",
      "next to",
      "to enter, occur",
      "to exclude, rule out"
    ]
  },
  {
    "question": "aussehen, sieht aus, sah aus, hat ausgesehen",
    "correct": "to seem, appear, look",
    "choices": [
      "to lift (up)",
      "to arise, result",
      "be to blame",
      "to seem, appear, look"
    ]
  },
  {
    "question": "aus sein, ist aus, war aus, ist aus gewesen",
    "correct": "be off",
    "choices": [
      "to catch",
      "be off",
      "to lie",
      "to take off, remove, take away, loose weight"
    ]
  },
  {
    "question": "außen",
    "correct": "outside, outwards",
    "choices": [
      "outside, outwards",
      "to do (something), to undertake, to make",
      "to telephone, call, call out",
      "behind, at the back"
    ]
  },
  {
    "question": "aussprechen, spricht aus, sprach aus, hat ausgesprochen",
    "correct": "to pronounce",
    "choices": [
      "to pronounce",
      "to guess, to advise",
      "to measure",
      "to hand in"
    ]
  },
  {
    "question": "ausziehen, zieht aus, zog aus, hat/ist ausgezogen",
    "correct": "to undress",
    "choices": [
      "read out",
      "to undress",
      "to increase",
      "open"
    ]
  },
  {
    "question": "backen, bäckt / backt, backte, hat gebacken",
    "correct": "to bake",
    "choices": [
      "to flow",
      "sleep",
      "to bake",
      "to call"
    ]
  },
  {
    "question": "sich befinden, befindet sich, befand sich, hat sich befunden",
    "correct": "to be located",
    "choices": [
      "to be located",
      "to shoot, kick",
      "to take down, uncouple, depend upon",
      "to lose"
    ]
  },
  {
    "question": "beginnen, beginnt, begann, hat begonnen",
    "correct": "begin",
    "choices": [
      "to close, shut",
      "to dismiss, discharge",
      "begin",
      "to flow"
    ]
  },
  {
    "question": "behalten, behält, behielt, hat behalten",
    "correct": "to keep",
    "choices": [
      "to turn off, bend",
      "to move (house)",
      "to be called",
      "to keep"
    ]
  },
  {
    "question": "bekannt geben, gibt bekannt, gab bekannt, hat bekannt gegeben",
    "correct": "to announce publicly",
    "choices": [
      "to lie",
      "drunk",
      "to occur, come forward",
      "to announce publicly"
    ]
  },
  {
    "question": "bekommen, bekommt, bekam, hat bekommen",
    "correct": "to receive, get",
    "choices": [
      "to criticise",
      "to receive, get",
      "to describe, write on",
      "be divorced"
    ]
  },
  {
    "question": "beraten, berät, beriet, hat beraten",
    "correct": "to advise",
    "choices": [
      "to close, shut",
      "to watch television",
      "to advise",
      "to force"
    ]
  },
  {
    "question": "Bescheid sagen",
    "correct": "to let someone know (tell someone)",
    "choices": [
      "to decide",
      "agreed",
      "to catch",
      "to let someone know (tell someone)"
    ]
  },
  {
    "question": "Bescheid geben",
    "correct": "to let someone know (give someone information)",
    "choices": [
      "agreed",
      "to boast",
      "to let someone know (give someone information)",
      "to request"
    ]
  },
  {
    "question": "beschließen, beschließt, beschloss, hat beschlossen",
    "correct": "to decide on",
    "choices": [
      "to decide on",
      "to take, take up",
      "to hand in",
      "to lift (up)"
    ]
  },
  {
    "question": "beschreiben, beschreibt, beschrieb, hat beschrieben",
    "correct": "to describe, write on",
    "choices": [
      "to connect, combine, bandage",
      "to describe, write on",
      "be divorced",
      "to do (something), to undertake, to make"
    ]
  },
  {
    "question": "besitzen, besitzt, besaß, hat besessen",
    "correct": "to own",
    "choices": [
      "to dismiss, discharge",
      "behind, at the back",
      "misunderstand",
      "to own"
    ]
  },
  {
    "question": "besprechen, bespricht, besprach, hat besprochen",
    "correct": "discuss",
    "choices": [
      "to behave",
      "data",
      "discuss",
      "to sink"
    ]
  },
  {
    "question": "betrügen, betrügt, betrog, hat betrogen",
    "correct": "cheat",
    "choices": [
      "to eat (for animals)",
      "to lose",
      "to request",
      "cheat"
    ]
  },
  {
    "question": "betrunken",
    "correct": "drunk",
    "choices": [
      "drunk",
      "beside it",
      "seldom",
      "represent"
    ]
  },
  {
    "question": "beweisen, beweist, bewies, hat bewiesen",
    "correct": "to prove",
    "choices": [
      "to criticise",
      "drunk",
      "to capture, arrest",
      "to prove"
    ]
  },
  {
    "question": "sich bewerben, bewirbt sich, bewarb sich, hat sich beworben",
    "correct": "to apply for",
    "choices": [
      "to apply for",
      "agreed",
      "indoor, inside",
      "to receive"
    ]
  },
  {
    "question": "bieten, bietet, bot, hat geboten",
    "correct": "to offer",
    "choices": [
      "to let someone know (tell someone)",
      "to offer",
      "to cut",
      "to watch television"
    ]
  },
  {
    "question": "ein bisschen",
    "correct": "a bit",
    "choices": [
      "a bit",
      "to announce publicly",
      "to live separate lives",
      "to occur, come forward"
    ]
  },
  {
    "question": "bitten, bittet, bat, hat gebeten",
    "correct": "to request",
    "choices": [
      "to decide on",
      "shut down",
      "to guess, to advise",
      "to request"
    ]
  },
  {
    "question": "bleiben, bleibt, blieb, ist geblieben",
    "correct": "to stay",
    "choices": [
      "to occur, come forward",
      "to suffer",
      "to stay",
      "to go for a walk"
    ]
  },
  {
    "question": "braten, brät, briet, hat gebraten",
    "correct": "to fry",
    "choices": [
      "to fry",
      "to apply for",
      "to receive, pick up, admit, include",
      "to happen"
    ]
  },
  {
    "question": "brechen, bricht, brach, hat gebrochen",
    "correct": "to break",
    "choices": [
      "because of",
      "to dismiss, discharge",
      "to transfer, apply",
      "to break"
    ]
  },
  {
    "question": "chatten",
    "correct": "to chat (internet)",
    "choices": [
      "to receive, pick up, admit, include",
      "to guess, to advise",
      "to forbid",
      "to chat (internet)"
    ]
  },
  {
    "question": "daneben",
    "correct": "beside it",
    "choices": [
      "talk",
      "that is why",
      "beside it",
      "to shine"
    ]
  },
  {
    "question": "Daten",
    "correct": "data",
    "choices": [
      "inside",
      "data",
      "to arise, result",
      "to present"
    ]
  },
  {
    "question": "deswegen",
    "correct": "that is why",
    "choices": [
      "to seem, appear, look",
      "that is why",
      "drunk",
      "over there"
    ]
  },
  {
    "question": "draußen",
    "correct": "outside",
    "choices": [
      "to take, take up",
      "outside",
      "find out",
      "to lift (up)"
    ]
  },
  {
    "question": "drin, drinnen",
    "correct": "indoor, inside",
    "choices": [
      "to dress",
      "to call",
      "indoor, inside",
      "to suggest"
    ]
  },
  {
    "question": "drüben",
    "correct": "over there",
    "choices": [
      "over there",
      "misunderstand",
      "to arrive",
      "to depart"
    ]
  },
  {
    "question": "dürfen, darf, durfte, / … dürfen",
    "correct": "to be allowed to",
    "choices": [
      "to be allowed to",
      "begin",
      "to prove",
      "read out"
    ]
  },
  {
    "question": "eben",
    "correct": "exactly, just, level, smooth",
    "choices": [
      "to do (something), to undertake, to make",
      "exactly, just, level, smooth",
      "that is why",
      "to boast"
    ]
  },
  {
    "question": "eigen",
    "correct": "own, peculiar, particular",
    "choices": [
      "own, peculiar, particular",
      "to drive",
      "to close, shut",
      "to ride"
    ]
  },
  {
    "question": "einbrechen, bricht ein, brach ein, ist eingebrochen",
    "correct": "to break in",
    "choices": [
      "to change (train, etc)",
      "to raise, lift, wind up, abolish",
      "to break in",
      "to invent"
    ]
  },
  {
    "question": "einfallen, fällt ein, fiel ein, ist eingefallen",
    "correct": "to fall in, collapse",
    "choices": [
      "to promise",
      "meanwhile",
      "to fall in, collapse",
      "to leave, allow, stop, have something done"
    ]
  },
  {
    "question": "einladen, lädt ein, lud ein, hat eingeladen",
    "correct": "to invite",
    "choices": [
      "spend",
      "to invite",
      "to ride",
      "to call"
    ]
  },
  {
    "question": "einnehmen, nimmt ein, nahm ein, hat eingenommen",
    "correct": "to take, take up",
    "choices": [
      "to strike, hit",
      "to take, take up",
      "to shut",
      "spend"
    ]
  },
  {
    "question": "einsteigen, steigt ein, stieg ein, ist eingestiegen",
    "correct": "to board, get in",
    "choices": [
      "to exclude, rule out",
      "to drive",
      "to board, get in",
      "to sit"
    ]
  },
  {
    "question": "eintragen, trägt ein, trug ein, hat eingetragen",
    "correct": "to enter, put one's name down",
    "choices": [
      "to increase",
      "to occur, come forward",
      "to sit",
      "to enter, put one's name down"
    ]
  },
  {
    "question": "eintreten, tritt ein, trat ein, ist eingetreten",
    "correct": "to enter, occur",
    "choices": [
      "to hand in",
      "to chat (internet)",
      "to live separate lives",
      "to enter, occur"
    ]
  },
  {
    "question": "einverstanden",
    "correct": "agreed",
    "choices": [
      "to avoid",
      "to sign",
      "agreed",
      "to grow up"
    ]
  },
  {
    "question": "einzeln",
    "correct": "single, odd (from a pair)",
    "choices": [
      "to grasp, seize, grab",
      "single, odd (from a pair)",
      "to eat",
      "misunderstand"
    ]
  },
  {
    "question": "einziehen, zieht ein, zog ein, ist eingezogen",
    "correct": "to move in, draw in, take in",
    "choices": [
      "to contain",
      "to move in, draw in, take in",
      "to lie (place/ location)",
      "to let someone know (give someone information)"
    ]
  },
  {
    "question": "empfangen, empfängt, empfing, hat empfangen",
    "correct": "to receive",
    "choices": [
      "to preserve, maintain, receive",
      "to move in, draw in, take in",
      "to get lost",
      "to receive"
    ]
  },
  {
    "question": "empfehlen, empfiehlt, empfahl, hat empfohlen",
    "correct": "to recommend",
    "choices": [
      "spend",
      "divorced",
      "because of",
      "to recommend"
    ]
  },
  {
    "question": "entgegenkommen",
    "correct": "to come towards, approach",
    "choices": [
      "to be noticeable, make an impression",
      "to telephone, call, call out",
      "to lend",
      "to come towards, approach"
    ]
  },
  {
    "question": "enthalten, enthält, enthielt, hat enthalten",
    "correct": "to contain",
    "choices": [
      "find out",
      "to take part",
      "to take",
      "to contain"
    ]
  },
  {
    "question": "entlassen, entlässt, entließ, hat entlassen",
    "correct": "to dismiss, discharge",
    "choices": [
      "to criticise",
      "to shoot, kick",
      "to dismiss, discharge",
      "to run over"
    ]
  },
  {
    "question": "entscheiden, entscheidet, entschied, hat entschieden",
    "correct": "to decide",
    "choices": [
      "to smell",
      "to decide",
      "to become",
      "to be able to"
    ]
  },
  {
    "question": "sich entschließen, entschließt sich, entschloss sich, hat sich entschlossen",
    "correct": "to make up one's mind, to decide",
    "choices": [
      "to invent",
      "to be supposed to",
      "to flow",
      "to make up one's mind, to decide"
    ]
  },
  {
    "question": "entstehen, entsteht, entstand, ist entstanden",
    "correct": "to arise, result",
    "choices": [
      "to arise, result",
      "to lie",
      "to take off, remove, take away, loose weight",
      "to find"
    ]
  },
  {
    "question": "erfahren, erfährt, erfuhr, hat erfahren",
    "correct": "to learn, find out, experience",
    "choices": [
      "to begin",
      "to interrupt",
      "to water",
      "to learn, find out, experience"
    ]
  },
  {
    "question": "erfinden, erfindet, erfand, hat erfunden",
    "correct": "to invent",
    "choices": [
      "to invent",
      "to understand",
      "read out",
      "get divorced"
    ]
  },
  {
    "question": "erhalten, erhält, erhielt, hat erhalten",
    "correct": "to preserve, maintain, receive",
    "choices": [
      "to write",
      "to preserve, maintain, receive",
      "behind, at the back",
      "to get lost"
    ]
  },
  {
    "question": "erziehen, erzieht, erzog, hat erzogen",
    "correct": "to bring up, raise",
    "choices": [
      "to keep",
      "to break in",
      "to bring up, raise",
      "to look up"
    ]
  },
  {
    "question": "essen, isst, aß, hat gegessen",
    "correct": "to eat",
    "choices": [
      "to control",
      "to eat",
      "to increase",
      "above, upstairs"
    ]
  },
  {
    "question": "fahren, fährt, fuhr, ist/hat gefahren",
    "correct": "to drive",
    "choices": [
      "a bit",
      "to take part",
      "go out",
      "to drive"
    ]
  },
  {
    "question": "fallen, fällt, fiel, ist gefallen",
    "correct": "to fall",
    "choices": [
      "to sign",
      "to arise, result",
      "to learn, find out, experience",
      "to fall"
    ]
  },
  {
    "question": "fangen, fängt, fing, hat gefangen",
    "correct": "to catch",
    "choices": [
      "to catch",
      "to carry, wear",
      "to want",
      "go out"
    ]
  },
  {
    "question": "fernsehen, sieht fern, sah fern, hat ferngesehen",
    "correct": "to watch television",
    "choices": [
      "to change (train, etc)",
      "to decide on",
      "to be supposed to",
      "to watch television"
    ]
  },
  {
    "question": "festhalten, hält fest, hielt fest, hat festgehalten",
    "correct": "to seize, hold fast",
    "choices": [
      "to seize, hold fast",
      "to lend",
      "to control",
      "to brush, to paint, to cancle"
    ]
  },
  {
    "question": "festnehmen, nimmt fest, nahm fest, hat festgenommen",
    "correct": "to capture, arrest",
    "choices": [
      "to speak, talk",
      "to steal",
      "to capture, arrest",
      "exactly, just, level, smooth"
    ]
  },
  {
    "question": "finden, findet, fand, hat gefunden",
    "correct": "to find",
    "choices": [
      "to lie (place/ location)",
      "to stink",
      "to leave, allow, stop, have something done",
      "to find"
    ]
  },
  {
    "question": "fliegen, fliegt, flog, ist geflogen",
    "correct": "to fly",
    "choices": [
      "to win",
      "to fly",
      "to control",
      "move"
    ]
  },
  {
    "question": "fliehen, flieht, floh, ist geflohen",
    "correct": "to flee",
    "choices": [
      "discuss",
      "most",
      "to occur, come forward",
      "to flee"
    ]
  },
  {
    "question": "fließen, fließt, floss, ist geflossen",
    "correct": "to flow",
    "choices": [
      "to catch",
      "to behave",
      "outside, outwards",
      "to flow"
    ]
  },
  {
    "question": "fressen, frisst, fraß, hat gefressen",
    "correct": "to eat (for animals)",
    "choices": [
      "be divorced",
      "to catch",
      "to steal",
      "to eat (for animals)"
    ]
  },
  {
    "question": "geben, gibt, gab, hat gegeben",
    "correct": "to give",
    "choices": [
      "single, odd (from a pair)",
      "to give",
      "sick leave",
      "to get up"
    ]
  },
  {
    "question": "gefallen, gefällt, gefiel, hat gefallen",
    "correct": "to like (pp. fallen)",
    "choices": [
      "in between, between",
      "to capture, arrest",
      "to like (pp. fallen)",
      "sick leave"
    ]
  },
  {
    "question": "gefallen lassen, lässt gefallen, ließ gefallen, hat gefallen lassen",
    "correct": "like, favor, please",
    "choices": [
      "downstairs, below",
      "go out",
      "to close, shut",
      "like, favor, please"
    ]
  },
  {
    "question": "gegen",
    "correct": "against, at",
    "choices": [
      "to be located",
      "to chat (internet)",
      "against, at",
      "to practise"
    ]
  },
  {
    "question": "gehen, geht, ging, ist gegangen",
    "correct": "to go",
    "choices": [
      "to shut",
      "exactly, just, level, smooth",
      "outside, outwards",
      "to go"
    ]
  },
  {
    "question": "gelingen, gelingt, gelang, ist gelungen",
    "correct": "to succeed",
    "choices": [
      "to succeed",
      "to let someone know (give someone information)",
      "to lift (up)",
      "to grasp, seize, grab"
    ]
  },
  {
    "question": "gelten, gilt, galt, hat gegolten",
    "correct": "to be valid",
    "choices": [
      "to seize, hold fast",
      "to be valid",
      "to prescribe, use up",
      "to lift (up)"
    ]
  },
  {
    "question": "geschehen, geschieht, geschah, ist geschehen",
    "correct": "to happen",
    "choices": [
      "to happen",
      "to lie (place/ location)",
      "to decide on",
      "to occur, come forward"
    ]
  },
  {
    "question": "geschieden",
    "correct": "divorced",
    "choices": [
      "to force",
      "to be supposed to",
      "to measure",
      "divorced"
    ]
  },
  {
    "question": "gestern",
    "correct": "yesterday",
    "choices": [
      "to transfer, refer",
      "yesterday",
      "to find",
      "to be noticeable, make an impression"
    ]
  },
  {
    "question": "getrennt leben",
    "correct": "to live separate lives",
    "choices": [
      "allow",
      "to sing",
      "to push",
      "to live separate lives"
    ]
  },
  {
    "question": "gewinnen, gewinnt, gewann, hat gewonnen",
    "correct": "to win",
    "choices": [
      "to win",
      "to write",
      "to let someone know (give someone information)",
      "seldom"
    ]
  },
  {
    "question": "gießen, gießt, goss, gegossen",
    "correct": "to water",
    "choices": [
      "to receive",
      "to water",
      "to grow up",
      "to contain"
    ]
  },
  {
    "question": "greifen, greift, griff, hat gegriffen",
    "correct": "to grasp, seize, grab",
    "choices": [
      "to sing",
      "to grasp, seize, grab",
      "to arise, result",
      "begin"
    ]
  },
  {
    "question": "halten, hält, hielt, hat gehalten",
    "correct": "to keep",
    "choices": [
      "to keep",
      "to be",
      "drunk",
      "but (rather)"
    ]
  },
  {
    "question": "heben, hebt, hob, hat gehoben",
    "correct": "to lift",
    "choices": [
      "to request",
      "to understand",
      "to depart",
      "to lift"
    ]
  },
  {
    "question": "heißen, heißt, hieß, hat geheißen",
    "correct": "to be called",
    "choices": [
      "to be noticeable, make an impression",
      "to be called",
      "to transfer, apply",
      "to brush, to paint, to cancle"
    ]
  },
  {
    "question": "helfen, hilft, half, hat geholfen",
    "correct": "to help",
    "choices": [
      "be divorced",
      "to help",
      "divorced",
      "to take place"
    ]
  },
  {
    "question": "heraus-, raus- / (he)rausfinden, findet heraus, fand heraus, hat herausgefunden",
    "correct": "find out",
    "choices": [
      "find out",
      "to pronounce",
      "to go biking",
      "to be up"
    ]
  },
  {
    "question": "herunter-, runter (he)runterladen, lädt herunter, lud herunter, hat heruntergeladen",
    "correct": "download",
    "choices": [
      "download",
      "to transfer, refer",
      "to practise",
      "to be"
    ]
  },
  {
    "question": "(he)runterfahren, fährt herunter, fuhr herunter, hat heruntergefahren",
    "correct": "shut down",
    "choices": [
      "to jump",
      "shut down",
      "drunk",
      "to announce publicly"
    ]
  },
  {
    "question": "hinten",
    "correct": "behind, at the back",
    "choices": [
      "to wash",
      "to raise, lift, wind up, abolish",
      "behind, at the back",
      "to move (house)"
    ]
  },
  {
    "question": "hinterlassen, hinterlässt, hinterließ, hat hinterlassen",
    "correct": "to leave",
    "choices": [
      "to get broken",
      "to telephone, call, call out",
      "to leave",
      "to find"
    ]
  },
  {
    "question": "hinweisen",
    "correct": "to point to, to refer to",
    "choices": [
      "to push",
      "to announce publicly",
      "to point to, to refer to",
      "most"
    ]
  },
  {
    "question": "innen",
    "correct": "inside",
    "choices": [
      "to go for a walk",
      "be to blame",
      "inside",
      "to hand in"
    ]
  },
  {
    "question": "inzwischen",
    "correct": "meanwhile",
    "choices": [
      "to live separate lives",
      "to contain",
      "to write",
      "meanwhile"
    ]
  },
  {
    "question": "kaputtgehen",
    "correct": "to get broken",
    "choices": [
      "to get broken",
      "seldom",
      "to announce publicly",
      "to dismiss, discharge"
    ]
  },
  {
    "question": "kaputtmachen",
    "correct": "to break",
    "choices": [
      "to break",
      "to rise, climb",
      "underground train",
      "to enter, put one's name down"
    ]
  },
  {
    "question": "klingen, klingt, klang, hat geklungen",
    "correct": "sound",
    "choices": [
      "to push",
      "to play sport",
      "to drink",
      "sound"
    ]
  },
  {
    "question": "kommen, kommt, kam, ist gekommen",
    "correct": "to come",
    "choices": [
      "to exclude, rule out",
      "to take",
      "to come",
      "to let someone know (give someone information)"
    ]
  },
  {
    "question": "können, kann, konnte, hat gekonnt/...können",
    "correct": "to be able to",
    "choices": [
      "to dissapear",
      "to invite",
      "to be able to",
      "to pull, move"
    ]
  },
  {
    "question": "kontrollieren",
    "correct": "to control",
    "choices": [
      "to control",
      "to be supposed to",
      "to give",
      "to chat (internet)"
    ]
  },
  {
    "question": "kopieren",
    "correct": "to copy",
    "choices": [
      "behind, at the back",
      "to copy",
      "be divorced",
      "to take off, remove, take away, loose weight"
    ]
  },
  {
    "question": "krankschreiben, schreibt krank, schrieb krank, hat krankgeschrieben",
    "correct": "sick leave",
    "choices": [
      "to be allowed to",
      "to cut",
      "to measure",
      "sick leave"
    ]
  },
  {
    "question": "kritisieren",
    "correct": "to criticise",
    "choices": [
      "the day before yesterday",
      "cope, manage",
      "in the middle of",
      "to criticise"
    ]
  },
  {
    "question": "lassen, lässt, ließ, hat gelassen",
    "correct": "to leave, allow, stop, have something done",
    "choices": [
      "to leave, allow, stop, have something done",
      "to request",
      "to practise",
      "to decide"
    ]
  },
  {
    "question": "laufen, läuft, lief, ist gelaufen",
    "correct": "to run",
    "choices": [
      "to drive",
      "to run",
      "to give",
      "to prescribe, use up"
    ]
  },
  {
    "question": "leiden, leidet, litt, hat gelitten",
    "correct": "to suffer",
    "choices": [
      "to suffer",
      "to wash",
      "allow",
      "to flow"
    ]
  },
  {
    "question": "leihen, leiht, lieh, hat geliehen",
    "correct": "to lend",
    "choices": [
      "allow",
      "to go biking",
      "underground train",
      "to lend"
    ]
  },
  {
    "question": "lesen, liest, las, hat gelesen",
    "correct": "to read",
    "choices": [
      "to read",
      "to win",
      "to be closed",
      "to preserve, maintain, receive"
    ]
  },
  {
    "question": "liegen, liegt, lag, hat gelegen / ist gelegen",
    "correct": "to lie (place/ location)",
    "choices": [
      "to argue",
      "to get broken",
      "to give",
      "to lie (place/ location)"
    ]
  },
  {
    "question": "losfahren, fährt los, fuhr los, ist losgefahren",
    "correct": "to leave",
    "choices": [
      "to leave",
      "to contain",
      "to find",
      "to smell"
    ]
  },
  {
    "question": "lügen, lügt, log, hat gelogen",
    "correct": "to lie",
    "choices": [
      "to lie",
      "next to",
      "over there",
      "to receive, pick up, admit, include"
    ]
  },
  {
    "question": "meinetwegen",
    "correct": "on my account, as far as I'm concerned",
    "choices": [
      "to flee",
      "on my account, as far as I'm concerned",
      "to give",
      "to enter, occur"
    ]
  },
  {
    "question": "meist-, die meisten",
    "correct": "most",
    "choices": [
      "most",
      "in the middle of",
      "misunderstand",
      "to forget"
    ]
  },
  {
    "question": "messen, misst, maß, hat gemessen",
    "correct": "to measure",
    "choices": [
      "to measure",
      "to prove",
      "to find",
      "to stay"
    ]
  },
  {
    "question": "missverstehen, missversteht, missverstand, hat missverstanden",
    "correct": "misunderstand",
    "choices": [
      "to do (something), to undertake, to make",
      "to drive",
      "misunderstand",
      "to write"
    ]
  },
  {
    "question": "mitten",
    "correct": "in the middle of",
    "choices": [
      "to wash",
      "to copy",
      "to stink",
      "in the middle of"
    ]
  },
  {
    "question": "modern",
    "correct": "modern",
    "choices": [
      "to steal",
      "modern",
      "to speak, talk",
      "to suggest"
    ]
  },
  {
    "question": "nachschlagen, schlägt nach, schlug nach, hat nachgeschlagen",
    "correct": "to look up",
    "choices": [
      "to bake",
      "to contradict",
      "to look up",
      "to get broken"
    ]
  },
  {
    "question": "neben",
    "correct": "next to",
    "choices": [
      "next to",
      "sick leave",
      "underground train",
      "to succeed"
    ]
  },
  {
    "question": "nehmen, nimmt, nahm, hat genommen",
    "correct": "to take",
    "choices": [
      "to take",
      "to own",
      "to water",
      "to seize, hold fast"
    ]
  },
  {
    "question": "notieren",
    "correct": "note",
    "choices": [
      "to speak, talk",
      "note",
      "wash up",
      "to make up one's mind, to decide"
    ]
  },
  {
    "question": "oben",
    "correct": "above, upstairs",
    "choices": [
      "above, upstairs",
      "to throw",
      "get divorced",
      "to keep"
    ]
  },
  {
    "question": "offen",
    "correct": "open",
    "choices": [
      "open",
      "to get up",
      "to speak, talk",
      "to decide"
    ]
  },
  {
    "question": "präsentieren",
    "correct": "to present",
    "choices": [
      "to present",
      "to arise, result",
      "to plan, to deal with something",
      "to swim"
    ]
  },
  {
    "question": "Rad fahren, fährt Rad, fuhr Rad, ist Rad gefahren",
    "correct": "to go biking",
    "choices": [
      "to fall in, collapse",
      "to do (something), to undertake, to make",
      "to stink",
      "to go biking"
    ]
  },
  {
    "question": "raten, rät, riet, hat geraten",
    "correct": "to guess, to advise",
    "choices": [
      "to distinguish",
      "to guess, to advise",
      "above, upstairs",
      "in the middle of"
    ]
  },
  {
    "question": "reiten, reitet, ritt, ist geritten",
    "correct": "to ride",
    "choices": [
      "to present",
      "divorced",
      "to ride",
      "to copy"
    ]
  },
  {
    "question": "riechen, riecht, roch, hat gerochen",
    "correct": "to smell",
    "choices": [
      "to write down",
      "to keep",
      "to smell",
      "to decide"
    ]
  },
  {
    "question": "rücken",
    "correct": "move",
    "choices": [
      "to wash",
      "to arrive",
      "move",
      "to compare"
    ]
  },
  {
    "question": "rufen, ruft, rief, hat gerufen",
    "correct": "to call",
    "choices": [
      "to do too much sport",
      "to water",
      "to call",
      "to take down, uncouple, depend upon"
    ]
  },
  {
    "question": "sich scheiden lassen, lässt sich scheiden, ließ sich scheiden, hat sich scheiden lassen",
    "correct": "get divorced",
    "choices": [
      "get divorced",
      "to water",
      "next to",
      "own, peculiar, particular"
    ]
  },
  {
    "question": "geschieden sein, ist geschieden, war geschieden",
    "correct": "be divorced",
    "choices": [
      "to be",
      "be divorced",
      "to shine",
      "to transfer, apply"
    ]
  },
  {
    "question": "scheinen, scheint, schien, hat geschienen",
    "correct": "to shine",
    "choices": [
      "to shine",
      "to dissapear",
      "data",
      "to prove"
    ]
  },
  {
    "question": "schieben, schiebt, schob, hat geschoben",
    "correct": "to push",
    "choices": [
      "to go for a walk",
      "to receive, get",
      "to push",
      "to be up"
    ]
  },
  {
    "question": "schießen, schießt, schoss, hat geschossen",
    "correct": "to shoot, kick",
    "choices": [
      "different",
      "to shoot, kick",
      "to describe, write on",
      "but (rather)"
    ]
  },
  {
    "question": "schlafen, schläft, schlief, hat geschlafen",
    "correct": "sleep",
    "choices": [
      "own, peculiar, particular",
      "most",
      "sleep",
      "to speak to"
    ]
  },
  {
    "question": "schlagen, schlägt, schlug, hat geschlagen",
    "correct": "to strike, hit",
    "choices": [
      "to stay",
      "to strike, hit",
      "to leave, allow, stop, have something done",
      "misunderstand"
    ]
  },
  {
    "question": "schließen, schließt, schloss, hat geschlossen",
    "correct": "to close, shut",
    "choices": [
      "to fry",
      "to close, shut",
      "to hand in",
      "to throw"
    ]
  },
  {
    "question": "schneiden, schneidet, schnitt, hat geschnitten",
    "correct": "to cut",
    "choices": [
      "to brush, to paint, to cancle",
      "get divorced",
      "to distinguish",
      "to cut"
    ]
  },
  {
    "question": "schreiben, schreibt, schrieb, hat geschrieben",
    "correct": "to write",
    "choices": [
      "to dress",
      "to drive",
      "to receive, pick up, admit, include",
      "to write"
    ]
  },
  {
    "question": "aufschreiben",
    "correct": "to write down",
    "choices": [
      "to contradict",
      "to read",
      "to write down",
      "to get broken"
    ]
  },
  {
    "question": "schreien, schreit, schrie, hat geschrien",
    "correct": "to scream",
    "choices": [
      "to arise, result",
      "to cut",
      "to take, take up",
      "to scream"
    ]
  },
  {
    "question": "schuld sein, ist schuld, war schuld, ist schuld gewesen",
    "correct": "be to blame",
    "choices": [
      "to hand in",
      "be to blame",
      "modern",
      "to be"
    ]
  },
  {
    "question": "schwimmen, schwimmt, schwamm, ist geschwommen",
    "correct": "to swim",
    "choices": [
      "to transfer, apply",
      "to grasp, seize, grab",
      "go out",
      "to swim"
    ]
  },
  {
    "question": "sehen, sieht, sah, hat gesehen",
    "correct": "to see",
    "choices": [
      "to see",
      "to eat (for animals)",
      "to prove",
      "to give in, give up"
    ]
  },
  {
    "question": "sein, ist, war, ist gewesen",
    "correct": "to be",
    "choices": [
      "to grow up",
      "to be",
      "in the middle of",
      "to criticise"
    ]
  },
  {
    "question": "selten",
    "correct": "seldom",
    "choices": [
      "seldom",
      "single, odd (from a pair)",
      "to give in, give up",
      "to speak, talk"
    ]
  },
  {
    "question": "singen, singt, sang, hat gesungen",
    "correct": "to sing",
    "choices": [
      "to carry, wear",
      "note",
      "download",
      "to sing"
    ]
  },
  {
    "question": "sinken, sinkt, sank, ist gesunken",
    "correct": "to sink",
    "choices": [
      "to sink",
      "to drive",
      "inside",
      "to boast"
    ]
  },
  {
    "question": "sitzen, sitzt, saß, hat gesessen",
    "correct": "to sit",
    "choices": [
      "to boast",
      "to depart",
      "to sit",
      "discuss"
    ]
  },
  {
    "question": "sollen, soll, sollte, hat gesollt/… ,sollen",
    "correct": "to be supposed to",
    "choices": [
      "to call",
      "to be supposed to",
      "to invite",
      "sleep"
    ]
  },
  {
    "question": "sondern",
    "correct": "but (rather)",
    "choices": [
      "to run over",
      "welcome",
      "but (rather)",
      "to write"
    ]
  },
  {
    "question": "spazieren gehen, geht spazieren, ging spazieren, ist spazieren gegangen",
    "correct": "to go for a walk",
    "choices": [
      "to arise, result",
      "to raise, lift, wind up, abolish",
      "to go for a walk",
      "to invite"
    ]
  },
  {
    "question": "sprechen, spricht, sprach, hat gesprochen",
    "correct": "to speak, talk",
    "choices": [
      "to sign",
      "cope, manage",
      "to speak, talk",
      "to be"
    ]
  },
  {
    "question": "springen, springt, sprang, ist gesprungen",
    "correct": "to jump",
    "choices": [
      "to invite",
      "to jump",
      "to move in, draw in, take in",
      "to stand"
    ]
  },
  {
    "question": "stattfinden, findet statt, fand statt, hat stattgefunden",
    "correct": "to take place",
    "choices": [
      "to copy",
      "to argue",
      "to take, take up",
      "to take place"
    ]
  },
  {
    "question": "stehen, steht, stand, hat gestanden",
    "correct": "to stand",
    "choices": [
      "to stand",
      "to invent",
      "to play sport",
      "to postpone, shift"
    ]
  },
  {
    "question": "stehen bleiben",
    "correct": "to stay",
    "choices": [
      "represent",
      "allow",
      "to let someone know (give someone information)",
      "to stay"
    ]
  },
  {
    "question": "stehlen, stiehlt, stahl, hat gestohlen",
    "correct": "to steal",
    "choices": [
      "underground train",
      "most",
      "to push",
      "to steal"
    ]
  },
  {
    "question": "steigen, steigt, stieg, ist gestiegen",
    "correct": "to rise, climb",
    "choices": [
      "to request",
      "to rise, climb",
      "to run over",
      "to run"
    ]
  },
  {
    "question": "sterben, stirbt, starb, ist gestorben",
    "correct": "to die",
    "choices": [
      "represent",
      "yesterday",
      "to die",
      "to stay"
    ]
  },
  {
    "question": "stinken, stinkt, stank, hat gestunken",
    "correct": "to stink",
    "choices": [
      "to get broken",
      "to stink",
      "to take part",
      "to turn off, bend"
    ]
  },
  {
    "question": "stoßen, stößt, stieß, hat gestoßen",
    "correct": "to shove, push, knock, bump",
    "choices": [
      "cheat",
      "to shove, push, knock, bump",
      "to seem, appear, look",
      "to help"
    ]
  },
  {
    "question": "streichen, streicht, strich, hat gestrichen",
    "correct": "to brush, to paint, to cancle",
    "choices": [
      "to hand in",
      "to force",
      "to brush, to paint, to cancle",
      "to argue"
    ]
  },
  {
    "question": "streiten, streitet, stritt, hat gestritten",
    "correct": "to argue",
    "choices": [
      "to lift (up)",
      "to steal",
      "to argue",
      "to change (train, etc)"
    ]
  },
  {
    "question": "teilnehmen, nimmt teil, nahm teil, hat teilgenommen",
    "correct": "to take part",
    "choices": [
      "to shove, push, knock, bump",
      "to take part",
      "to dismiss, discharge",
      "to grasp, seize, grab"
    ]
  },
  {
    "question": "tragen, trägt, trug, hat getragen",
    "correct": "to carry, wear",
    "choices": [
      "be off",
      "like, favor, please",
      "to meet",
      "to carry, wear"
    ]
  },
  {
    "question": "treffen, trifft, traf, hat getroffen",
    "correct": "to meet",
    "choices": [
      "to be allowed to",
      "to meet",
      "to be located",
      "to be closed"
    ]
  },
  {
    "question": "treiben, treibt, trieb, hat getrieben",
    "correct": "to play sport",
    "choices": [
      "to run over",
      "canceled, fall out, drop out",
      "to seize, hold fast",
      "to play sport"
    ]
  },
  {
    "question": "treten, tritt, trat, hat/ ist getreten",
    "correct": "to step, kick",
    "choices": [
      "to describe, write on",
      "to lift",
      "to get up",
      "to step, kick"
    ]
  },
  {
    "question": "trinken, trinkt, trank, hat getrunken",
    "correct": "to drink",
    "choices": [
      "to preserve, maintain, receive",
      "read out",
      "to criticise",
      "to drink"
    ]
  },
  {
    "question": "trocken",
    "correct": "dry",
    "choices": [
      "to carry, wear",
      "to contain",
      "dry",
      "because of"
    ]
  },
  {
    "question": "U-Bahn, -en",
    "correct": "underground train",
    "choices": [
      "most",
      "underground train",
      "to play sport",
      "to go biking"
    ]
  },
  {
    "question": "üben",
    "correct": "to practise",
    "choices": [
      "to be noticeable, make an impression",
      "to be valid",
      "to practise",
      "to run"
    ]
  },
  {
    "question": "überfahren, überfährt, überfuhr, hat überfahren",
    "correct": "to run over",
    "choices": [
      "to shove, push, knock, bump",
      "exactly, just, level, smooth",
      "to lift",
      "to run over"
    ]
  },
  {
    "question": "übermorgen",
    "correct": "the day after tomorrow",
    "choices": [
      "to jump",
      "the day after tomorrow",
      "to move in, draw in, take in",
      "to bake"
    ]
  },
  {
    "question": "übernehmen, übernimmt, übernahm, hat übernommen",
    "correct": "to take over",
    "choices": [
      "to come towards, approach",
      "to take over",
      "exactly, just, level, smooth",
      "to dismiss, discharge"
    ]
  },
  {
    "question": "übertragen, überträgt, übertrug, hat übertragen",
    "correct": "to transfer, apply",
    "choices": [
      "to transfer, apply",
      "to suffer",
      "to be noticeable, make an impression",
      "to connect"
    ]
  },
  {
    "question": "übertreiben, übertreibt, übertrieb, hat übertrieben",
    "correct": "to do too much sport",
    "choices": [
      "to fly",
      "to stand",
      "to do too much sport",
      "to increase"
    ]
  },
  {
    "question": "überweisen, überweist, überwies, hat überwiesen",
    "correct": "to transfer, refer",
    "choices": [
      "to bring up, raise",
      "to move in, draw in, take in",
      "to transfer, refer",
      "behind, at the back"
    ]
  },
  {
    "question": "umsteigen, steigt um, stieg um, ist umgestiegen",
    "correct": "to change (train, etc)",
    "choices": [
      "that is why",
      "to brush, to paint, to cancle",
      "to change (train, etc)",
      "outside, outwards"
    ]
  },
  {
    "question": "umziehen, zieht um, zog um, hat/ ist umgezogen",
    "correct": "to move (house)",
    "choices": [
      "to move (house)",
      "to weigh",
      "to suffer",
      "to shoot, kick"
    ]
  },
  {
    "question": "unten",
    "correct": "downstairs, below",
    "choices": [
      "to look up",
      "to be located",
      "downstairs, below",
      "dry"
    ]
  },
  {
    "question": "unterbrechen, unterbricht, unterbrach, hat unterbrochen",
    "correct": "to interrupt",
    "choices": [
      "to describe, write on",
      "to be valid",
      "to leave",
      "to interrupt"
    ]
  },
  {
    "question": "sich unterhalten, unterhält sich, unterhielt sich, hat sich unterhalten",
    "correct": "talk",
    "choices": [
      "to occur, come forward",
      "to read",
      "talk",
      "to step, kick"
    ]
  },
  {
    "question": "unternehmen, unternimmt, unternahm, hat unternommen",
    "correct": "to do (something), to undertake, to make",
    "choices": [
      "to connect",
      "discuss",
      "to pull, move",
      "to do (something), to undertake, to make"
    ]
  },
  {
    "question": "unterscheiden, unterscheidet, unterschied, hat unterschieden",
    "correct": "to distinguish",
    "choices": [
      "to pronounce",
      "to distinguish",
      "talk",
      "to underline"
    ]
  },
  {
    "question": "unterschreiben, unterschreibt, unterschrieb, hat unterschrieben",
    "correct": "to sign",
    "choices": [
      "go out",
      "to sign",
      "to board, get in",
      "to begin"
    ]
  },
  {
    "question": "unterstreichen, unterstreicht, unterstrich, hat unterstrichen",
    "correct": "to underline",
    "choices": [
      "to underline",
      "to interrupt",
      "to let someone know (give someone information)",
      "to chat (internet)"
    ]
  },
  {
    "question": "verbieten, verbietet, verbot, hat verboten",
    "correct": "to forbid",
    "choices": [
      "to board, get in",
      "to forbid",
      "to read",
      "to move (house)"
    ]
  },
  {
    "question": "verbinden, verbindet, verband, hat verbunden",
    "correct": "to connect, combine, bandage",
    "choices": [
      "to take down, uncouple, depend upon",
      "to connect, combine, bandage",
      "to win",
      "to receive, get"
    ]
  },
  {
    "question": "vergessen, vergisst, vergaß, hat vergessen",
    "correct": "to forget",
    "choices": [
      "to forget",
      "above, upstairs",
      "to sing",
      "to shut"
    ]
  },
  {
    "question": "vergleichen, vergleicht, verglich, hat verglichen",
    "correct": "to compare",
    "choices": [
      "in the middle of",
      "to help",
      "to own",
      "to compare"
    ]
  },
  {
    "question": "verhalten, verhält, verhielt, hat verhalten",
    "correct": "to behave",
    "choices": [
      "to be closed",
      "to behave",
      "to transfer, refer",
      "discuss"
    ]
  },
  {
    "question": "verlassen, verlässt, verließ, hat verlassen",
    "correct": "to leave",
    "choices": [
      "to seem, appear, look",
      "to leave",
      "agreed",
      "modern"
    ]
  },
  {
    "question": "sich verlaufen, verläuft sich, verlief sich, hat sich verlaufen",
    "correct": "to get lost",
    "choices": [
      "to get lost",
      "to argue",
      "to give in, give up",
      "yesterday"
    ]
  },
  {
    "question": "verleihen, verleiht, verlieh, hat verliehen",
    "correct": "to lend",
    "choices": [
      "to dismiss, discharge",
      "to arise, result",
      "to close, shut",
      "to lend"
    ]
  },
  {
    "question": "verlieren, verliert, verlor, hat verloren",
    "correct": "to lose",
    "choices": [
      "to win",
      "to lose",
      "in the middle of",
      "to prove"
    ]
  },
  {
    "question": "vermeiden, vermeidet, vermied, hat vermieden",
    "correct": "to avoid",
    "choices": [
      "move",
      "to avoid",
      "in the middle of",
      "to compare"
    ]
  },
  {
    "question": "verschieben, verschiebt, verschob, hat verschoben",
    "correct": "to postpone, shift",
    "choices": [
      "to receive, get",
      "to postpone, shift",
      "to take down, uncouple, depend upon",
      "to sign"
    ]
  },
  {
    "question": "verschieden",
    "correct": "different",
    "choices": [
      "different",
      "to eat",
      "cheat",
      "to flee"
    ]
  },
  {
    "question": "verschreiben, verschreibt, verschrieb, hat verschrieben",
    "correct": "to prescribe, use up",
    "choices": [
      "to be valid",
      "to change (train, etc)",
      "to prescribe, use up",
      "to give in, give up"
    ]
  },
  {
    "question": "verschwinden, verschwindet, verschwand, ist verschwunden",
    "correct": "to dissapear",
    "choices": [
      "to come",
      "to dissapear",
      "to help",
      "to leave, allow, stop, have something done"
    ]
  },
  {
    "question": "versprechen, verspricht, versprach, hat versprochen",
    "correct": "to promise",
    "choices": [
      "to look at",
      "to compare",
      "to promise",
      "to grasp, seize, grab"
    ]
  },
  {
    "question": "verstehen, versteht, verstand, hat verstanden",
    "correct": "to understand",
    "choices": [
      "to dismiss, discharge",
      "to understand",
      "to seem, appear, look",
      "beside it"
    ]
  },
  {
    "question": "vertreten, vertritt, vertrat, hat vertreten",
    "correct": "represent",
    "choices": [
      "to move in, draw in, take in",
      "represent",
      "to fry",
      "to get up"
    ]
  },
  {
    "question": "vorgestern",
    "correct": "the day before yesterday",
    "choices": [
      "the day before yesterday",
      "talk",
      "to do (something), to undertake, to make",
      "against, at"
    ]
  },
  {
    "question": "vorkommen, kommt vor, kam vor, ist vorgekommen",
    "correct": "to occur, come forward",
    "choices": [
      "to steal",
      "to let someone know (give someone information)",
      "to occur, come forward",
      "to fall"
    ]
  },
  {
    "question": "vorlesen, liest vor, las vor, hat vorgelesen",
    "correct": "read out",
    "choices": [
      "to turn off, bend",
      "to live separate lives",
      "read out",
      "to come towards, approach"
    ]
  },
  {
    "question": "sich vornehmen, nimmt sich vor, nahm sich vor, hat sich vorgenommen",
    "correct": "to plan, to deal with something",
    "choices": [
      "to plan, to deal with something",
      "to move in, draw in, take in",
      "to help",
      "to happen"
    ]
  },
  {
    "question": "vorschlagen, schlägt vor, schlug vor, hat vorgeschlagen",
    "correct": "to suggest",
    "choices": [
      "outside, outwards",
      "to connect, combine, bandage",
      "to suggest",
      "to come towards, approach"
    ]
  },
  {
    "question": "wachsen, wächst, wuchs, ist gewachsen",
    "correct": "to grow up",
    "choices": [
      "to compare",
      "to grow up",
      "shut down",
      "to water"
    ]
  },
  {
    "question": "waschen, wäscht, wusch, hat gewaschen",
    "correct": "to wash",
    "choices": [
      "to wash",
      "a bit",
      "to water",
      "to compare"
    ]
  },
  {
    "question": "wegen",
    "correct": "because of",
    "choices": [
      "because of",
      "to point to, to refer to",
      "to see",
      "on my account, as far as I'm concerned"
    ]
  },
  {
    "question": "werden, wird, wurde, ist geworden",
    "correct": "to become",
    "choices": [
      "to get broken",
      "that is why",
      "to become",
      "to call"
    ]
  },
  {
    "question": "werfen, wirft, warf, hat geworfen",
    "correct": "to throw",
    "choices": [
      "outside, outwards",
      "to become",
      "different",
      "to throw"
    ]
  },
  {
    "question": "widersprechen, widerspricht, widersprach, hat widersprochen",
    "correct": "to contradict",
    "choices": [
      "to be able to",
      "to flee",
      "seldom",
      "to contradict"
    ]
  },
  {
    "question": "wiegen, wiegt, wog, hat gewogen",
    "correct": "to weigh",
    "choices": [
      "to weigh",
      "that is why",
      "to take down, uncouple, depend upon",
      "to strike, hit"
    ]
  },
  {
    "question": "willkommen",
    "correct": "welcome",
    "choices": [
      "to rise, climb",
      "welcome",
      "yesterday",
      "to receive, pick up, admit, include"
    ]
  },
  {
    "question": "wollen, will, wollte, hat gewollt/ -wollen",
    "correct": "to want",
    "choices": [
      "divorced",
      "to want",
      "sleep",
      "to write down"
    ]
  },
  {
    "question": "ziehen, zieht, zog, hat gezogen/ ist gezogen",
    "correct": "to pull, move",
    "choices": [
      "to offer",
      "to sign",
      "because of",
      "to pull, move"
    ]
  },
  {
    "question": "zugehen",
    "correct": "to shut",
    "choices": [
      "to prove",
      "to change (train, etc)",
      "divorced",
      "to shut"
    ]
  },
  {
    "question": "zulassen, lässt zu, ließ zu, hat zugelassen",
    "correct": "allow",
    "choices": [
      "allow",
      "to hand in",
      "to sign",
      "to seize, hold fast"
    ]
  },
  {
    "question": "zunehmen, nimmt zu, nahm zu, hat zugenommen",
    "correct": "to increase",
    "choices": [
      "to increase",
      "to be called",
      "to catch",
      "to seize, hold fast"
    ]
  },
  {
    "question": "zurechtkommen, kommt zurecht, kam zurecht, ist zurechtgekommen",
    "correct": "cope, manage",
    "choices": [
      "to brush, to paint, to cancle",
      "cope, manage",
      "but (rather)",
      "to recommend"
    ]
  },
  {
    "question": "zu sein, ist zu, war zu, ist zu gewesen",
    "correct": "to be closed",
    "choices": [
      "to practise",
      "to be closed",
      "to criticise",
      "to be valid"
    ]
  },
  {
    "question": "zwingen, zwingt, zwang, hat gezwungen",
    "correct": "to force",
    "choices": [
      "occur",
      "get divorced",
      "to force",
      "to interrupt"
    ]
  },
  {
    "question": "zwischen",
    "correct": "in between, between",
    "choices": [
      "to look up",
      "data",
      "to turn off, bend",
      "in between, between"
    ]
  }
];