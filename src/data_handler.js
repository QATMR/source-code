function chooseKfromArray(k, values) {
    var indexArray = [];
    for (let i = 0; i < values.length; i++) {
        indexArray.push(i);
    }

    indexArray.sort(function(){
        return 0.5 - Math.random();
    });

    let ret = [];

    if (k > values.length){
        k = values.length;
    }

    for (let i = 0; i < k; i++) {
        let idx = indexArray[i];
        ret.push(values[idx]);
    }

    return ret;
}

function get_offline_contents() {
    let passage_data = `Tom falls in love with Becky Thatcher, a new girl in town, and persuades her to get "engaged" by kissing him. But their romance collapses when she learns Tom has been "engaged" previously to Amy Lawrence. Becky cries for a great deal of time until the other students begin to notice, and she becomes embarrassed. Shortly after Becky shuns him, he accompanies Huckleberry Finn to the graveyard at night, where they witness a trio of body snatchers, Dr. Robinson, Muff Potter, and Injun Joe, getting into a fight in which Robinson is murdered by Injun Joe. Tom and Huckleberry Finn swear a blood oath to not tell anyone about the murder, as they feel that if they do, Injun Joe would murder them.
    Natasha visits the Moscow opera, where she meets Hélène and her brother Anatole. Anatole has since married a Polish woman whom he has abandoned in Poland. He is very attracted to Natasha and determined to seduce her, and conspires with his sister to do so. Anatole succeeds in making Natasha believe he loves her, eventually establishing plans to elope. Natasha writes to Princess Maria, Andrei's sister, breaking off her engagement. At the last moment, Sonya discovers her plans to elope and foils them. Natasha learns from Pierre of Anatole's marriage. Devastated, Natasha makes a suicide attempt and is left seriously ill.
    Alex is a 15-year-old living in near-future dystopian England who leads his gang on a night of opportunistic, random "ultra-violence". Alex's friends ("droogs" in the novel's Anglo-Russian slang, 'Nadsat') are Dim, a slow-witted bruiser who is the gang's muscle; Georgie, an ambitious second-in-command; and Pete, who mostly plays along as the droogs indulge their taste for ultra-violence. Characterised as a sociopath and hardened juvenile delinquent, Alex also displays intelligence, quick wit, and a predilection for classical music; he is particularly fond of Beethoven, referred to as "Lovely Ludwig Van". The novella begins with the droogs sitting in their favourite hangout, the Korova Milk Bar, and drinking "milk-plus" — a beverage consisting of milk laced with the customer's drug of choice — to prepare for a night of mayhem. They assault a scholar walking home from the public library; rob a store, leaving the owner and his wife bloodied and unconscious; beat up a beggar; then scuffle with a rival gang. Joyriding through the countryside in a stolen car, they break into an isolated cottage and terrorise the young couple living there, beating the husband and raping his wife.
    In March 1997, Maj. Jack Reacher is briefed by his superior Leon Garber on a troubling development in Carter's Crossing, Mississippi: a woman has been found murdered, her throat slit, with signs of rape, and the military is concerned that one of the potential suspects seems to be Cpt. Reed Riley, a commander at Fort Kelham, a nearby Army Ranger base, with a reputation as a ladykiller. Garber informs Reacher that another MP, Maj. Duncan Munro, has been assigned to investigate the murder; his job is to go undercover and ensure that Munro's investigation doesn't damage the military's public image. He also puts Reacher in touch with Col. James John Frazer, a Senate liaison who warns Reacher that Reed's father, Senator Carlton Riley, a member of the Armed Services Committee, is threatening to impose harsh budget cuts on the army if his son is targeted. Posing as a drifter, Reacher takes up residence in a local inn and goes for a meal, where he meets the local sheriff, Elizabeth Deveraux. A former Marine, she quickly deduces Reacher's true identity and purpose, but permits him to stay as long as he doesn't interfere with her investigation. Reacher does so anyway, and learns that the dead woman, Janice Chapman, was the third woman murdered in Carter's Crossing in just the last few months; the other two were young women from the poorer, largely African American section of town. Reacher's old friend Sgt. Frances Neagley arrives with a warning to stay away from Deveraux, who she claims was dishonorably discharged from the service following an incident with a fellow Marine, but Jack disregards her advice.
    Agnes Grey is the daughter of Mr. Grey, a minister of modest means, and Mrs. Grey, a woman who left her wealthy family and married purely out of love. Mr. Grey tries to increase the family's financial standing, but the merchant he entrusts his money to dies in a wreck, and the lost investment plunges the family into debt. Agnes, her sister Mary, and their mother all try to keep expenses low and bring in extra money, but Agnes is frustrated that everyone treats her like a child. To prove herself and to earn money, she is determined to get a position as a governess. Eventually, she obtains a recommendation from a well-placed acquaintance, is offered a position, and secures her parents' permission. With some misgivings, she travels to Wellwood house to work for the Bloomfield family. The Bloomfields are rich and much crueller than Agnes had expected. Mrs. Bloomfield spoils her children while Mr. Bloomfield constantly finds fault with Agnes's work. The children are unruly and Agnes is held accountable for them despite being given no real authority over them. Tom, the oldest Bloomfield child, is particularly abusive and even tortures small animals. In less than a year, Agnes is relieved of her position, since Mrs. Bloomfield thinks that her children are not learning quickly enough. Agnes returns home.`;
    let passage_ids = [577, 41, 363, 767, 318];
    return {
        passage_ids: passage_ids,
        passage_data: passage_data.split('\n')
    };
}

function loadErrorPassages() {
    let passages = get_offline_contents();
    return passages;
}

async function parsePassages(response, number_of_passages) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return loadErrorPassages();
    }

    const data = await response.json();

    let all_passage_ids = Object.keys(data);

    let selected_passages;

    if (number_of_passages > 0){
        selected_passages = chooseKfromArray(number_of_passages, all_passage_ids);
    }else{
        // Or we select all passages
        selected_passages=all_passage_ids;
    }


    // Get number_of_passages random passages to show the user.

    let ret = [];

    for (let i = 0; i < selected_passages.length; i++) {
        let passage_id = selected_passages[i];
        const passage = data[passage_id];
        passage["passage_id"] = passage_id;
        ret.push(passage);
        console.log(passage);
    }

    return ret;
}

async function fetchPassagesWithRetries(n, number_of_passage, data_url) {
    for (let i = 0; i < n; i++){
        try{
            const response = await fetch(data_url);
            return await parsePassages(response, number_of_passage);
        }catch (e) {
            console.log(e);
        }
    }

    return get_offline_contents();
}

async function loadValidationDataWithRetriesOrNull(n, data_url) {
    for (let i = 0; i < n; i++){
        try{
            const response = await fetch(data_url);
            const data = await response.json();
            return data;
        }catch (e) {
            console.log("Fetch " + data_url +" failed", e);
        }
    }
    console.log("Failed...");
    return null;
}

module.exports = {
    parsePassages,
    chooseKfromArray,
    fetchPassagesWithRetries,
    loadValidationDataWithRetriesOrNull
};