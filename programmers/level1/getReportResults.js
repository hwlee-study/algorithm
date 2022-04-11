//https://programmers.co.kr/learn/courses/30/lessons/92334
function getReportResults(id_list, report, k) {
  let reportObj = reportObjInit(id_list);

  report.forEach((el) => {
    let [reportPerson, reportedPerson] = el.split(" ");
    if (reportObj[reportPerson].reports.indexOf(reportedPerson) === -1) {
      reportObj[reportPerson].reports.push(reportedPerson);
      reportObj[reportedPerson].reportCnt += 1;
      if (reportObj[reportedPerson].reportCnt >= k) {
        reportObj[reportedPerson].isStopped = true;
      }
    }
  });

  return id_list.map((el) => {
    return reportObj[el].reports.filter(
      (reportedId) => reportObj[reportedId].isStopped
    ).length;
  });
}

function reportObjInit(id_list) {
  let result = new Map();
  id_list.forEach((el) => {
    return (result[el] = {
      reports: [],
      reportCnt: 0,
      isStopped: false,
    });
  });
  return result;
}

let id_list = ["muzi", "frodo", "apeach", "neo"],
  report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ],
  k = 2;
console.log(getReportResults(id_list, report, k));
//[2,1,1,0]

// id_list = ["con", "ryan"],
// report = ["ryan con", "ryan con", "ryan con", "ryan con"],
// k = 3;
// console.log(getReportResults(id_list, report, k))
// [0,0]
