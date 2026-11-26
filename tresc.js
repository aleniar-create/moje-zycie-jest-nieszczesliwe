// TREŚĆ PREZENTACJI „Moje życie jest nieszczęśliwe” — jedyny plik zmieniany przy nowej prezentacji.
// Ładują go obie strony: index.html (telefon) i prowadzacy.html (slajdy). Plik jest publiczny: nic poufnego.
// Po każdej zmianie otwórz prowadzacy.html?mock=1 — pomyłki wypisze lewy górny róg, a w panelu (N) ma być „Kontrola treści: bez uwag”.

// ===================== HISTORIA Z DECYZJAMI: dane =====================
// Bohater, Daniel, jest wymyślony. Fakty i liczby pochodzą z artykułów wymienionych na slajdzie ze źródłami.
// „styl” to rodzaj odpowiedzi: K = kieruję (radzę, oceniam), P = pytam, Z = zostaję przy tym, co jest, O = odróżniam i porządkuję.
const HIST = {
  kryteria: ['Dane', 'Ryzyko'],
  znaki: [
    { tak: '✓ wspiera', rozne: '? niejednoznaczne', nie: '✗ nie wspiera' },
    { tak: '✓ niskie', rozne: '? zależy', nie: '✗ są dane o szkodzie' }],
  czas: 40,
  decyzje: [
    { id: 'd1', kiedy: 'Pierwsze spotkanie', nazwa: 'Nadzieja',
      scena: '<p class="kw">Daniel, siatkarz, ma uszkodzone kolano. Siada naprzeciw ciebie.</p>' +
        '<p class="kw">„Wracam za trzy miesiące.”</p><p class="kw">„Lekarz mówi, że to raczej koniec.”</p><p class="kw">„Zresztą siatkówka mnie już nie obchodzi.”</p>',
      streszczenie: 'Daniel, siatkarz z uszkodzonym kolanem: „Wracam za trzy miesiące. Lekarz mówi, że to raczej koniec. Zresztą siatkówka mnie już nie obchodzi.”',
      fakty: ['Poczucie zdrowia wiąże się ze szczęściem (r cząstkowe = 0,31), a z poczuciem sensu prawie wcale (0,04). (Baumeister i in. 2013)',
        'Myślenie o przyszłości wiąże się ze szczęściem ujemnie (r cząstkowe = −0,18), a z poczuciem sensu tylko słabo dodatnio (0,09). (Baumeister i in. 2013)'],
      pytanie: 'Co mówisz?',
      opcje: [
        ['A', 'Gratuluję i zachęcam.', 'Gratuluję, zachęcam'],
        ['B', 'Pytam, co dokładnie ma wrócić i jak wyobraża sobie pierwszy miesiąc.', 'Pytam, co ma wrócić'],
        ['C', 'Mówię wprost, że lekarz nie widzi powrotu do dawnej formy.', 'Mówię o prognozie'],
        ['D', 'Zauważam trzy sprzeczne rzeczy i pytam, która jest najważniejsza.', 'Pytam o najważniejszą']],
      styl: { A: 'K', B: 'P', C: 'K', D: 'O' },
      skutek: {
        A: 'Daniel kiwa głową i mówi, że za trzy miesiące zagra. „Bo ja tak naprawdę nie wiem, czy ja jeszcze…”',
        B: 'Daniel milczy chwilę. Mówi, że chodzi o rozgrzewkę przed meczem i o szatnię. „Bo ja tak naprawdę nie wiem, czy ja jeszcze…”',
        C: 'Daniel patrzy w okno. Mówi, że lekarz nie zna jego kolana. „Bo ja tak naprawdę nie wiem, czy ja jeszcze…”',
        D: 'Daniel się śmieje. Mówi, że ważne jest wszystko, po chwili, że nic. „Bo ja tak naprawdę nie wiem, czy ja jeszcze…”' },
      oceny: { A: ['rozne', 'rozne'], B: ['tak', 'tak'], C: ['rozne', 'rozne'], D: ['rozne', 'rozne'] },
      dlaczego: {
        A: 'Brak danych o skutku samej zachęty, a Daniel sam wątpi.',
        B: 'Wspiera: pytanie rozszerza uwagę poza jedno zdarzenie (Wilson 2000, streszczenie).',
        C: 'W czytanych źródłach brak danych o takiej rozmowie.',
        D: 'Technika rozmowy, bez wyniku z badania.' } },

    { id: 'd2', kiedy: 'Drugie spotkanie', nazwa: 'Ostatni mecz',
      scena: '<p class="kw">Daniel mówi o ostatnim meczu sezonu. W trzecim secie coś pękło w kolanie.</p><p class="kw">„Cała ta kariera to była pomyłka.”</p>',
      streszczenie: 'Daniel o ostatnim meczu sezonu, w którym uszkodził kolano: „Cała ta kariera to była pomyłka.”',
      fakty: ['22 z 32 osób wybrało powtórzenie dłuższej próby z zimną wodą, bo kończyła się łagodniej. (Kahneman i in. 1993)',
        'Po kolonoskopii wydłużonej o łagodniejszą końcówkę pacjenci oceniali ból niżej (4,9 wobec 4,4). To jeden zabieg, nie cała kariera. (Redelmeier i in. 2003)'],
      pytanie: 'Co robisz?',
      opcje: [
        ['A', 'Nie kwestionuję oceny, proszę o opowieść o całej karierze.', 'Proszę o całą karierę'],
        ['B', 'Proponuję własne pożegnanie z grą.', 'Proponuję pożegnanie'],
        ['C', 'Odsuwam przeszłość i pytam o ostatni tydzień.', 'Pytam o ostatni tydzień'],
        ['D', 'Rozdzielam „wtedy” od „teraz”: proszę o trzy chwile z sezonu.', 'Trzy chwile z sezonu']],
      styl: { A: 'Z', B: 'K', C: 'P', D: 'O' },
      skutek: {
        A: 'Daniel opowiada o pierwszym klubie i o tym, jak zaczynał. O meczu mówi dopiero na końcu.',
        B: 'Daniel milknie. Mówi, że na pożegnanie jest jeszcze za wcześnie.',
        C: 'Daniel mówi, że w zeszłym tygodniu dwa razy spał do południa. O meczu nie wspomina.',
        D: 'Daniel wymienia akcję z pierwszego seta, rozmowę z trenerem i ostatnią piłkę. Boli go tylko ostatnia.' },
      oceny: { A: ['rozne', 'tak'], B: ['rozne', 'rozne'], C: ['rozne', 'rozne'], D: ['tak', 'tak'] },
      dlaczego: {
        A: 'Brak badań o takiej rozmowie, a słuchanie niczego nie narzuca.',
        B: 'Reguła szczytu i końca dotyczy epizodów, nie kariery. To hipoteza.',
        C: 'Brak danych. Odsuwa temat, który Daniel sam poruszył.',
        D: 'Zakłada, że wspomnienie ma szczyt i koniec. Dane z krótkich epizodów.' } },

    { id: 'd3', kiedy: 'Trzecie spotkanie', nazwa: 'Brak sensu',
      scena: '<p class="kw">„Nic nie ma sensu.”</p><p class="kw">„Dawniej wstawałem o 5:40. Teraz leżę do jedenastej.”</p>',
      streszczenie: 'Daniel: „Nic nie ma sensu. Dawniej wstawałem o 5:40. Teraz leżę do jedenastej.”',
      fakty: ['Próby pomagania potrzebującym wiążą się z poczuciem sensu (r cząstkowe = 0,23), a ze szczęściem nie (−0,06). (Baumeister i in. 2013)',
        'Stres wiąże się ze szczęściem ujemnie (r cząstkowe = −0,47), a z poczuciem sensu dodatnio (0,18). (Baumeister i in. 2013)'],
      pytanie: 'Co robisz?',
      opcje: [
        ['A', 'Pytam, co mógłby zrobić dla kogoś innego.', 'Pytam o coś dla innych'],
        ['B', 'Na razie nie szukam sensu: sen, rytm dnia, drobne przyjemności.', 'Najpierw sen i rytm dnia'],
        ['C', 'Pytam, po co dawniej wstawał o 5:40.', 'Pytam o 5:40'],
        ['D', 'Pytam, co jeszcze, poza siatkówką, coś dla niego znaczy.', 'Pytam, co jeszcze znaczy']],
      styl: { A: 'K', B: 'Z', C: 'P', D: 'P' },
      skutek: {
        A: 'Daniel mówi, że juniorów z klubu nie widział od miesiąca. Po chwili: „Mogę im pokazać zagrywkę.”',
        B: 'Daniel zgadza się na stałą godzinę wstawania. Pytanie o sens zostaje odłożone.',
        C: 'Daniel mówi, że wstawał, bo ktoś na niego czekał na hali.',
        D: 'Daniel milczy, potem wspomina, że lubi gotować dla ojca.' },
      oceny: { A: ['tak', 'tak'], B: ['rozne', 'rozne'], C: ['tak', 'tak'], D: ['rozne', 'tak'] },
      dlaczego: {
        A: 'Pomaganie potrzebującym wiąże się z sensem (r cząstkowe = 0,23).',
        B: 'Brak badań o takiej kolejności kroków. Odkłada pytanie o sens.',
        C: 'Przeszłość i przyszłość łącznie: słaby związek z sensem (r cząstkowe = 0,11).',
        D: 'Pytanie otwarte, bez wyniku z badania. Ryzyko niskie.' } },

    { id: 'd5', kiedy: 'Czwarte spotkanie', nazwa: 'Zadanie',
      scena: '<p class="kw">Koniec spotkania. Daniel pyta, co ma robić do następnego razu.</p>',
      streszczenie: 'Koniec spotkania. Daniel pyta, co ma robić do następnego razu.',
      fakty: ['Ćwiczenie „trzy dobre rzeczy” podnosiło szczęście i obniżało objawy depresji przez 6 miesięcy u internetowych ochotników bez klinicznej depresji. (Seligman i in. 2005)',
        'W modelu satysfakcji z życia największą część wyjaśnianych różnic dają relacje z ludźmi (50,2%). (Lamu i Olsen 2016, streszczenie)'],
      pytanie: 'Co zadajesz?',
      opcje: [
        ['A', 'Trzy dobre rzeczy z dnia.', 'Trzy dobre rzeczy'],
        ['B', 'Zrobić coś dla kogoś, np. poprowadzić jeden trening juniorów.', 'Coś dla kogoś'],
        ['C', 'Nie zadaję nic.', 'Nie zadaję nic'],
        ['D', 'Rozmowa z ojcem o czymś innym niż kolano i siatkówka.', 'Rozmowa z ojcem']],
      styl: { A: 'O', B: 'K', C: 'Z', D: 'K' },
      skutek: {
        A: 'Daniel zapisuje trzy rzeczy z dnia. Pierwszego wieczoru: „kawa, ojciec, nic”.',
        B: 'Daniel zgadza się poprowadzić jeden trening juniorów. W drodze na halę zawraca raz.',
        C: 'Daniel wychodzi bez zadania. Następnym razem mówi, że nie wiedział, czego od niego oczekujesz.',
        D: 'Daniel rozmawia z ojcem o jego ogrodzie. Mówi, że ojciec ani razu nie zapytał o kolano.' },
      oceny: { A: ['rozne', 'tak'], B: ['tak', 'tak'], C: ['rozne', 'tak'], D: ['tak', 'rozne'] },
      dlaczego: {
        A: 'Efekt u ochotników bez klinicznej depresji, a o Danielu danych brak.',
        B: 'Samoopis „jestem dającym”: sens r = 0,32, szczęście −0,17 (cząstkowe).',
        C: 'Brak badań o braku zadania, ryzyko niskie.',
        D: 'Relacje dominują w modelu satysfakcji (Lamu i Olsen 2016). Zależy od tej relacji.' } }
  ]
};

// ===================== HISTORIA: funkcje =====================
const hTekst = (x, a) => typeof x === 'function' ? x(a) : x;
const hZnak = (z, j) => '<span class="zn ' + z + '">' + HIST.znaki[j][z] + '</span>';
const hOcena = (d, a) => d.oceny[a[d.id]] || null;
const hKomorka = (o, j) => hZnak(o[j], j);

function hEkran(d, i) {
  return { znacznik: d.kiedy + ' · decyzja ' + (i + 1) + ' z ' + HIST.decyzje.length, tytul: d.nazwa, czas: HIST.czas,
    bloki: [
      { typ: 'tekst', html: d.scena + '<details class="fakty" open><summary>Zanim zdecydujesz: dwa fakty</summary><ul>' +
          d.fakty.map(f => '<li>' + f + '</li>').join('') + '</ul></details>' },
      { typ: 'wybor', klucz: d.id, pytanie: d.pytanie, raz: true, opcje: d.opcje.map(o => [o[0], o[1]]),
        pokaz: (v, a) => '<div class="ev">' + hTekst(d.skutek[v], a) + '</div><p class="muted">Teraz spójrz na duży ekran. Dalej idziemy razem.</p>' }],
    stopka: 'Liczy się pierwsza odpowiedź. Historia jest wymyślona.' };
}

function hSlajd(d, i) {
  return { id: d.id, ekran: d.id, kroki: 2, html: (h, k) => {
    const glowa = '<div class="kicker">Daniel · ' + d.kiedy + ' · decyzja ' + (i + 1) + ' z ' + HIST.decyzje.length + (k ? '' : ' · telefon') + '</div><h1 class="q">' + d.nazwa + '</h1>';
    if (k === 0) return glowa + '<div class="scena">' + d.streszczenie + '</div>' +
      '<div class="box"><div class="lbl">Zanim zdecydujesz: dwa fakty</div><ul>' + d.fakty.map(f => '<li>' + f + '</li>').join('') + '</ul></div>' + h.zebrane(d.id) +
      '<div class="foot">Na telefonie: scena, dwa fakty i cztery odpowiedzi. Pasek odmierza ' + HIST.czas + ' sekund.</div>';
    if (k === 1) {
      const c = h.zlicz(d.id), n = h.ile(d.id);
      return glowa + h.slupki({ max: Math.max(1, ...d.opcje.map(o => c[o[0]] || 0)), fmt: v => v + ' (' + (n ? Math.round(v / n * 100) : 0) + '%)',
        serie: [{ nazwa: 'Wybory sali', kolor: 'var(--s1)' }], grupy: d.opcje.map(o => ({ etykieta: o[2], wartosci: [c[o[0]] || 0] })) }) +
        '<div class="foot">Wybory sali (n = ' + n + '). Następne kliknięcie pokaże ocenę każdej odpowiedzi.</div>';
    }
    return glowa + '<table class="t maly"><tr><th>Odpowiedź</th><th>' + HIST.kryteria[0] + '</th><th>' + HIST.kryteria[1] + '</th><th>Dlaczego</th></tr>' +
      d.opcje.map(o => '<tr><td>' + o[2] + '</td><td>' + hKomorka(d.oceny[o[0]], 0) + '</td><td>' + hKomorka(d.oceny[o[0]], 1) + '</td><td>' + d.dlaczego[o[0]] + '</td></tr>').join('') +
      '</table><div class="foot">Dane: czy założenie za odpowiedzią ma poparcie w badaniach; „niejednoznaczne” to brak badań, nie zła odpowiedź. Ryzyko: ostrożnościowa ocena autora, nie wynik badania. Historia jest wymyślona.</div>';
  } };
}

// ----- epilog: torba, reguły, ton -----
const STYLE = ['K', 'P', 'Z', 'O'];
const hStyle = a => {
  if (!HIST.decyzje.every(d => a[d.id])) return null;
  const c = { K: 0, P: 0, Z: 0, O: 0 };
  HIST.decyzje.forEach(d => { c[d.styl[a[d.id]]]++; });
  return c;
};
const hDominuje = c => {
  const m = Math.max(...STYLE.map(s => c[s]));
  const w = STYLE.filter(s => c[s] === m);
  return w.length === 1 ? w[0] : null;
};
// stan torby Daniela po miesiącu; dla przewagi O i dla remisu: „pusta”
const hTorba = a => {
  const c = hStyle(a);
  if (!c) return undefined;
  const s = hDominuje(c);
  return (s === 'K' || s === 'P' || s === 'Z') ? s : 'pusta';
};
const TORBA = {
  K: 'Po miesiącu torba Daniela stoi spakowana przy drzwiach. Na trening jeszcze nie pojechał.',
  P: 'Po miesiącu torba leży otwarta na podłodze. Daniel wyjął z niej dwie rzeczy i zostawił resztę.',
  Z: 'Po miesiącu torba stoi w szafie. Daniel mówi, że do niej nie zagląda.',
  pusta: 'Po miesiącu torba stoi w szafie. W środku nic nie ma.' };
const TORBA_KR = { K: 'Spakowana przy drzwiach', P: 'Otwarta na podłodze', Z: 'W szafie, nietknięta', pusta: 'W szafie, pusta' };
const TON = {
  K: 'Większość twoich odpowiedzi to rady i oceny. Daniel dostał dużo gotowych kierunków.',
  P: 'Większość twoich odpowiedzi to pytania. Daniel sam układał odpowiedzi.',
  Z: 'Większość twoich odpowiedzi to towarzyszenie bez zmieniania kierunku.',
  O: 'Większość twoich odpowiedzi to odróżnianie i porządkowanie tego, co Daniel już powiedział.' };
const REGULY = [
  { kiedy: a => a.d1 === 'A' || a.d1 === 'C', tekst: 'Daniel wyszedł z pierwszego spotkania z oceną swojego powrotu, a nie z własnym opisem tego, co ma wrócić.' },
  { kiedy: a => a.d1 === 'B' || a.d1 === 'D', tekst: 'Daniel wyszedł z pierwszego spotkania z własnym opisem tego, co ma wrócić.' },
  { kiedy: a => a.d2 === 'A' || a.d2 === 'D', tekst: 'Daniel opowiedział o meczu własnymi słowami.' },
  { kiedy: a => a.d3 !== 'B', tekst: 'W rozmowie pojawiło się coś poza siatkówką: ludzie, hala albo dom.' },
  { kiedy: a => a.d5 === 'B' || a.d5 === 'D', tekst: 'Zadanie wyprowadziło Daniela poza gabinet i poza temat kolana.' }];

function hEpilog(a) {
  const t = hTorba(a);
  if (!t) return '<p class="lead">Brakuje którejś decyzji.</p><p class="muted">Wróć do niej przez link na dole ekranu.</p>';
  const c = hStyle(a), dom = hDominuje(c);
  const reguly = REGULY.filter(r => r.kiedy(a)).map(r => '<p>' + r.tekst + '</p>').join('');
  return '<p class="lead">' + TORBA[t] + '</p>' + reguly +
    (dom && c[dom] >= 3 ? '<p class="muted">' + TON[dom] + '</p>' : '') +
    '<p class="muted">Epilog jest wymyślony, tak jak cała historia.</p>' +
    HIST.decyzje.map(d => {
      const o = d.opcje.find(x => x[0] === a[d.id]), oc = hOcena(d, a);
      return '<div class="ev"><b>' + d.kiedy + '.</b> ' + o[2] + '<br>' + HIST.kryteria[0] + ' ' + hZnak(oc[0], 0) + '<br>' + HIST.kryteria[1] + ' ' + hZnak(oc[1], 1) + '</div>';
    }).join('');
}
const HIST_EKRANY = {};
HIST.decyzje.forEach((d, i) => { HIST_EKRANY[d.id] = hEkran(d, i); });

// ----- ranking: sześć kolejności relacji (R), zdrowia (Z), dochodu (D) -----
const RANK = [
  ['RZD', 'Relacje › Zdrowie › Dochód'], ['RDZ', 'Relacje › Dochód › Zdrowie'],
  ['ZRD', 'Zdrowie › Relacje › Dochód'], ['ZDR', 'Zdrowie › Dochód › Relacje'],
  ['DRZ', 'Dochód › Relacje › Zdrowie'], ['DZR', 'Dochód › Zdrowie › Relacje']];
const PIERWSZE = (h, klucz) => {
  const c = h.zlicz(klucz), n = h.ile(klucz), r = { R: 0, Z: 0, D: 0 };
  Object.keys(c).forEach(k => { if (r[k[0]] !== undefined) r[k[0]] += c[k]; });
  return ['R', 'Z', 'D'].map(x => n ? r[x] / n * 100 : 0);
};
const PROC = v => v == null ? '—' : Math.round(v) + '%';
const PODZ = [0, 25, 50, 75, 100].map(v => ({ v, n: v + '%' }));

window.TRESC = {
  prefiks: 'dobre-zycie-1126',
  tytul: 'Moje życie jest nieszczęśliwe',
  nazwaTelefon: 'Dobre życie',

  // ===================== EKRANY TELEFONU =====================
  ekrany: Object.assign({
    start: { tytul: 'Jesteś z nami', bloki: [
      { typ: 'tekst', html: '<p class="lead">Odłóż telefon ekranem w dół.</p><p class="muted">Kiedy będzie potrzebny, ekran sam się zmieni.</p>' }] },

    pauza: { tytul: 'Spójrz na duży ekran', bloki: [
      { typ: 'tekst', html: '<p class="lead">Telefon możesz odłożyć.</p><p class="muted">Kiedy będzie potrzebny, ekran sam się zmieni.</p>' }] },

    dochod: { znacznik: 'Zgadnij', tytul: 'Jaki udział w wyjaśnianiu satysfakcji z życia przypada na dochód?', wyslij: 'Wyślij', bloki: [
      { typ: 'suwak', klucz: 'dochod', pytanie: 'Przesuń suwak i wyślij swój typ.', min: 0, max: 100, krok: 1, jednostka: '%' }],
      stopka: 'Odpowiedź jest anonimowa.' },

    rank1: { znacznik: 'Ranking', tytul: 'Co jest najsilniej związane z satysfakcją z życia?', bloki: [
      { typ: 'wybor', klucz: 'rank1', pytanie: 'Wybierz kolejność od najsilniej do najsłabiej związanego.', raz: true, opcje: RANK }],
      stopka: 'Liczy się pierwsza odpowiedź.' },

    rank2: { znacznik: 'Ranking', tytul: 'Co jest najważniejsze dla Daniela w pierwszym miesiącu?', bloki: [
      { typ: 'wybor', klucz: 'rank2', pytanie: 'Wybierz kolejność od najważniejszego do najmniej ważnego.', raz: true, opcje: RANK }],
      stopka: 'Liczy się pierwsza odpowiedź.' },

    epilog: { znacznik: 'Epilog', tytul: 'Miesiąc później', bloki: [{ typ: 'tekst', html: a => hEpilog(a) }] },

    karta: { znacznik: 'Na wynos', tytul: 'Dziękuję', bloki: [
      { typ: 'tekst', html:
        '<p class="lead">Zanim komuś pomożesz być szczęśliwszym, ustal, o jakie szczęście mu chodzi.</p>' +
        '<p><b>Po tych zajęciach potrafisz:</b></p><ul>' +
        '<li>nazwać 4–5 koncepcji szczęścia i powiedzieć, czym się różnią,</li>' +
        '<li>usłyszeć, którą koncepcję zawierają słowa pacjenta albo twoje własne,</li>' +
        '<li>wybrać ćwiczenie i wiedzieć, kiedy go nie stosować.</li></ul>' +
        '<p><b>Gdy ty albo ktoś bliski potrzebuje pomocy:</b></p><ul>' +
        '<li><b>116 123</b>: Poradnia Telefoniczna dla Osób Dorosłych w Kryzysie Emocjonalnym (Niebieska Linia IPZ PTP), bezpłatnie, anonimowo.</li>' +
        '<li><b>800 70 2222</b>: Centrum Wsparcia dla osób dorosłych w kryzysie psychicznym (Fundacja ITAKA), bezpłatnie, całodobowo.</li>' +
        '<li><b>112</b>: numer alarmowy.</li>' +
        '<li><b>116 111</b>: telefon zaufania dla dzieci i młodzieży.</li></ul>' +
        '<p class="muted">Numery sprawdzone 26.11.2026. Jeśli chcesz zachować kartę, zrób zrzut ekranu.</p>' }] }
  }, HIST_EKRANY),

  // ===================== SLAJDY =====================
  slajdy: [
    { id: 'tytul', ekran: 'start', html: h => `
      <div class="row" style="height:100%;align-items:center">
        <div class="col">
          <div class="kicker">Psychologia pozytywna · koncepcje dobrego i szczęśliwego życia</div>
          <h1 style="font-size:84px">Moje życie jest nieszczęśliwe</h1>
          <div class="sub">Zeskanuj kod. W kilku miejscach to ty zdecydujesz.</div>
          <div class="sub" style="margin-top:44px;color:var(--ink);font-weight:600">Adam · Varsovia</div>
        </div>
        <div style="flex:none;text-align:center">
          ${h.qr(420)}
          <div style="font-size:26px;margin-top:14px">Zeskanuj kod aparatem telefonu</div>
          <div style="font-size:24px;color:var(--ink2);margin-top:6px">Dołączyło: <b style="color:var(--ink)">${h.osoby()}</b></div>
        </div>
      </div>` },

    { id: 'definicje', ekran: 'pauza', html: h => `
      <div class="kicker">Pięć koncepcji</div>
      <h1>O jakie szczęście chodzi?</h1>
      <table class="t maly">
        <tr><th>Koncepcja</th><th>O co chodzi</th><th>Źródło</th></tr>
        <tr><td>Dobry traf</td><td>W 24 z 30 przebadanych słowników szczęście łączy się z losem i szansą.</td><td>Oishi i in. 2013</td></tr>
        <tr><td>Przyjemność</td><td>Szczęście przeżywane chwila po chwili, także zapamiętywane inaczej, niż trwało.</td><td>Kahneman i in. 1993</td></tr>
        <tr><td>Satysfakcja z życia</td><td>Ocena życia jako całości, tu mierzona skalą SWLS.</td><td>Lamu i Olsen 2016</td></tr>
        <tr><td>Sens</td><td>Życie ma wartość także wtedy, gdy bywa trudne i niewygodne.</td><td>Baumeister i in. 2013</td></tr>
        <tr><td>Ćwiczone dobro</td><td>Krótkie ćwiczenia, które kierują uwagę na to, co dobre.</td><td>Seligman i in. 2005</td></tr>
      </table>
      <div class="box sol"><div class="txt">Często mylimy się, co nas uszczęśliwi i co uszczęśliwiło, więc ustal, o jakie szczęście chodzi.</div></div>` },

    { id: 'dochod', ekran: 'dochod', kroki: 2, html: (h, k) => `
      <div class="kicker">Zgadnij · telefon</div>
      <h1 class="q">Jaki udział w wyjaśnianiu satysfakcji z życia przypada na dochód?</h1>
      ${k === 0 ? h.zebrane('dochod') : h.slupki({ max: 100, fmt: (v, i) => v == null ? 'brak typów' : i ? v.toFixed(1).replace('.', ',') + '%' : Math.round(v) + '%',
        podzialka: PODZ,
        serie: [{ nazwa: 'Wasze typy (średnia z sali)', kolor: 'var(--s1)' }, { nazwa: 'Wynik badania', kolor: 'var(--s2)' }].slice(0, k >= 2 ? 2 : 1),
        grupy: [{ etykieta: 'Udział dochodu', wartosci: [h.srednia('dochod'), k >= 2 ? 7.3 : undefined] }] })}
      <div class="foot">${k >= 2 ? 'Lamu i Olsen (2016): udział w dopasowaniu modelu satysfakcji z życia, nie odsetek szczęścia. N = 7933, sześć krajów.' : k ? 'Typy z sali: n = ' + h.ile('dochod') + '. Następne kliknięcie pokaże wynik z badania.' : 'Zbieramy typy. Wyniki pokaże następne kliknięcie.'}</div>` },

    { id: 'rank1', ekran: 'rank1', kroki: 1, html: (h, k) => `
      <div class="kicker">Ranking · telefon</div>
      <h1 class="q">Co jest najsilniej związane z satysfakcją z życia?</h1>
      ${k ? h.wykres('rank1') : h.zebrane('rank1')}
      <div class="foot">${k ? 'Wybory sali. Następny slajd pokaże wynik z badania.' : 'Wynik pokaże następne kliknięcie.'}</div>` },

    { id: 'lamu', ekran: 'pauza', html: h => `
      <div class="kicker">Dane z badania · bez telefonu</div>
      <h1>Relacje, zdrowie, dochód</h1>
      ${h.slupki({ max: 60, fmt: v => v.toFixed(1).replace('.', ',') + '%',
        podzialka: [0, 20, 40, 60].map(v => ({ v, n: v + '%' })),
        serie: [{ nazwa: 'Udział w dopasowaniu modelu satysfakcji z życia', kolor: 'var(--s1)' }],
        grupy: [{ etykieta: 'Relacje z ludźmi', wartosci: [50.2] }, { etykieta: 'Zdrowie', wartosci: [19.3] }, { etykieta: 'Dochód', wartosci: [7.3] }] })}
      <div class="foot">Lamu i Olsen (2016): N = 7933, sześć krajów OECD, zdrowie mierzone EQ-5D-5L. To związki, nie przyczyny. Źródło znane ze streszczenia.</div>` },

    { id: 'daniel', ekran: 'pauza', html: h => `
      <div class="kicker">Historia z decyzjami</div>
      <h1>Daniel</h1>
      <div class="scena">Siatkarz z uszkodzonym kolanem. Ty jesteś psychologiem. Cztery rozmowy, po każdej wybierasz na telefonie.</div>
      <div class="foot">Daniel jest wymyślony. Fakty przed każdą decyzją są z badań, a oceny według dwóch kryteriów: Dane i Ryzyko.</div>` }
  ].concat(HIST.decyzje.map(hSlajd), [

    { id: 'rank2', ekran: 'rank2', kroki: 1, html: (h, k) => {
      if (!k) return `
        <div class="kicker">Ranking · telefon</div>
        <h1 class="q">Co jest najważniejsze dla Daniela w pierwszym miesiącu?</h1>
        ${h.zebrane('rank2')}
        <div class="foot">Wynik pokaże następne kliknięcie.</div>`;
      return `
        <div class="kicker">Ranking · porównanie</div>
        <h1 class="q">Kto jest na pierwszym miejscu?</h1>
        ${h.slupki({ max: 100, fmt: PROC, podzialka: PODZ,
          serie: [{ nazwa: 'Satysfakcja z życia (n = ' + h.ile('rank1') + ')', kolor: 'var(--s1)' }, { nazwa: 'Dla Daniela (n = ' + h.ile('rank2') + ')', kolor: 'var(--s2)' }],
          grupy: ['Relacje', 'Zdrowie', 'Dochód'].map((e, i) => ({ etykieta: e, wartosci: [PIERWSZE(h, 'rank1')[i], PIERWSZE(h, 'rank2')[i]] })) })}
        <div class="foot">Odsetek osób, które ułożyły dany czynnik na pierwszym miejscu. Dla Daniela to nie wynik z badania, tylko wybór sali.</div>`; } },

    { id: 'epilog', ekran: 'epilog', kroki: 2, html: (h, k) => {
      if (!k) return `
        <div class="kicker">Daniel · epilog · telefon</div>
        <h1>Miesiąc później</h1>
        <div class="scena">Każdy ma na telefonie własny epilog: co z jego czterech odpowiedzi wynikło dla Daniela.</div>
        <div class="foot">Epilog jest wymyślony. Następne kliknięcie pokaże, jak skończyła sala.</div>`;
      if (k === 1) {
        const c = h.policz(hTorba), n = Object.values(c).reduce((x, y) => x + y, 0);
        return `
          <div class="kicker">Daniel · epilog</div>
          <h1>Gdzie stoi torba Daniela?</h1>
          ${h.slupki({ max: Math.max(1, ...Object.values(c)), fmt: v => v + ' (' + (n ? Math.round(v / n * 100) : 0) + '%)',
            serie: [{ nazwa: 'Stan torby', kolor: 'var(--s1)' }],
            grupy: ['K', 'P', 'Z', 'pusta'].map(s => ({ etykieta: TORBA_KR[s], wartosci: [c[s] || 0] })) })}
          <div class="foot">Stan torby zależy od tego, jakich odpowiedzi było najwięcej (n = ${n}). To wymyślony epilog, nie wynik badania.</div>`;
      }
      let naj = null;
      HIST.decyzje.forEach(d => { const c = h.zlicz(d.id); d.opcje.forEach(o => { const n = c[o[0]] || 0; if (n > 0 && (!naj || n < naj.n)) naj = { d, o, n }; }); });
      return `
        <div class="kicker">Daniel · epilog</div>
        <h1>Najrzadszy wybór sali</h1>
        ${naj ? '<div class="scena">' + naj.d.nazwa + ': ' + naj.o[2] + ' (' + h.odm(naj.n, 'osoba', 'osoby', 'osób') + ' z ' + h.ile(naj.d.id) + ')</div><div class="box"><div class="lbl">Co się stało</div><div class="txt">' + hTekst(naj.d.skutek[naj.o[0]], {}) + '</div></div>' : '<div class="scena">Brak odpowiedzi.</div>'}
        <div class="foot">Pierwszy wybór o najmniejszej liczbie głosów, wśród czterech decyzji.</div>`; } },

    { id: 'koniec', ekran: 'karta', html: h => `
      <div class="kicker">Na wynos · telefon</div>
      <h1>Trzy rzeczy, które potrafisz</h1>
      <ul class="plain">
        <li>Nazwać 4–5 koncepcji szczęścia i powiedzieć, czym się różnią.</li>
        <li>Usłyszeć, którą koncepcję zawierają słowa pacjenta albo twoje własne.</li>
        <li>Wybrać ćwiczenie i wiedzieć, kiedy go nie stosować.</li>
      </ul>
      <div class="box sol"><div class="txt">Zanim komuś pomożesz być szczęśliwszym, ustal, o jakie szczęście mu chodzi.</div></div>
      <div class="foot">Na telefonach została karta z tym zdaniem i numerami pomocy, sprawdzonymi 26.11.2026.</div>` },

    { id: 'zrodla', html: h => `
      <div class="kicker">Źródła · stan na 26.11.2026</div>
      <h1>Źródła</h1>
      <ul class="plain" style="font-size:22px">
        <li>Baumeister, Vohs, Aaker, Garbinsky (2013). Journal of Positive Psychology, 8(6), 505–516.</li>
        <li>Kahneman, Fredrickson, Schreiber, Redelmeier (1993). Psychological Science, 4(6), 401–405.</li>
        <li>Lamu, Olsen (2016). Social Science &amp; Medicine, 152, 176–185.</li>
        <li>Oishi, Graham, Kesebir, Galinha (2013). Personality and Social Psychology Bulletin, 39(5), 559–577.</li>
        <li>Redelmeier, Katz, Kahneman (2003). Pain, 104, 187–194.</li>
        <li>Seligman, Steen, Park, Peterson (2005). American Psychologist, 60(5), 410–421.</li>
        <li>Wilson i in. (2000). Journal of Personality and Social Psychology, 78, 821–836.</li>
      </ul>
      <div class="foot">Współczynniki Baumeistera to korelacje cząstkowe: szczęście przy stałym poczuciu sensu i odwrotnie. W całości przeczytane: Baumeister, Kahneman, Redelmeier, Oishi, Seligman. Tylko streszczenia: Lamu i Olsen, Wilson. Historia o Danielu jest wymyślona.</div>` }
  ])
};
