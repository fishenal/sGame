define(['data'], function (data) {
    function randomNum (min, max) {
        if (max == null) {
              max = min;
              min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    function genarate() {
      var sex = Math.random() > .5;
      var CFnames = data.ChnFname;
      var CNames = sex ? data.ChnName.girl : data.ChnName.boy;
      var ENames = sex ? data.EngName.girl : data.EngName.boy;
      var Jobs = data.Jobs;
      var Person = {};
      var cfname = CFnames[randomNum(1, CFnames.length - 1)];
      var cname = CNames[randomNum(1, CNames.length - 1)];
      var ename = ENames[randomNum(1, ENames.length - 1)];
      var job = Jobs[randomNum(1, Jobs.length - 1)]
      Person.cname = cfname + cname;
      Person.ename = ename;
      Person.job = job;
      Person.sex = sex ? '女' : '男';
      return Person;
    }
    return {
      genarate: genarate
    };
})