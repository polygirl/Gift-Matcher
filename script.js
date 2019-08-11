function makeMatches(){
  var people = [];
  var unallocatedPeople = [];
  var iqfyPeople = [];
    iqfyPeople.push({name: 'Paulene', birthday: '18 July', dietaryReqs: 'No pref'})
    iqfyPeople.push({name: 'Klaus', birthday: '23 July', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Jean', birthday: '31 July', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Harpreet', birthday: '8 August', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Sue', birthday: '6 September', dietaryReqs: 'Gluten free'}),
    iqfyPeople.push({name: 'Kyle with a really really really long name', birthday: '9 September', dietaryReqs: 'Probably keto'}),
    iqfyPeople.push({name: 'Brad', birthday: '9 September', dietaryReqs: 'Banana cake, choc icing'}),
    iqfyPeople.push({name: 'Filype', birthday: '4 October', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Joe', birthday: '5 November', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Sarika', birthday: '26 November', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Shanan', birthday: '1 December', dietaryReqs: 'Likes dark chocolate'}),
    iqfyPeople.push({name: 'Rob', birthday: '25 November', dietaryReqs: 'Chocolate mudcake'}),
    iqfyPeople.push({name: 'Jory', birthday: '2 January', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Becs', birthday: '21 February', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Christine', birthday: '31 March', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Vicky', birthday: '10 April', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Caitlin', birthday: '7 May', dietaryReqs: 'Carrot'}),
    iqfyPeople.push({name: 'Thel', birthday: '15 May', dietaryReqs: 'Tiramisu'}),
    iqfyPeople.push({name: 'Sam G', birthday: '18 May', dietaryReqs: 'Healthy option'}),
    iqfyPeople.push({name: 'Rachael', birthday: '19 May', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Dom', birthday: '6 June', dietaryReqs: 'No pref'}),
    iqfyPeople.push({name: 'Bindy', birthday: '30 June', dietaryReqs: 'Dairy Free'}),
    iqfyPeople.push({name: 'Vicken', birthday: '11 July', dietaryReqs: 'No pref'})

    iqfyPeople.forEach(function(person) {
      people.push(person.name);
      unallocatedPeople.push(person.name);
    }); 

  var pair = function(namesArray) {
    var result = [];
    namesArray.forEach(function(sender) {
      var recipientIndex = Math.floor(Math.random() * unallocatedPeople.length);
      while (unallocatedPeople[recipientIndex] === sender) {
        // Can't send gift to myself
        recipientIndex = Math.floor(Math.random() * unallocatedPeople.length);
      }
      var recipientName = unallocatedPeople.splice(recipientIndex, 1)[0];
      var recipientFullInfo = iqfyPeople.find((person) => {
        return person.name === recipientName
      });
      result.push({
        sender: sender,
        receiver: recipientFullInfo,
      })
    });
    return result;
  };

  var pairs = pair(people);
  var printResult = "<table><thead><tr><th>Sender</th><th>Recipient</th><th>Birthday</th><th>Dietary Reqs</th></tr></thead><tbody>"

  pairs.forEach(function(person) {
    printResult += "<tr><td>" + person.sender +  "</td><td'>" + person.receiver.name + "</td><td>" + person.receiver.birthday + "</td><td>" + person.receiver.dietaryReqs + "</td></tr>";
  }); 

  printResult += "</tbody></table>";
  document.getElementById('matchList').innerHTML = printResult;
}
