$(document).ready(async function () {
  await fetch("https://d278shrvx9bxd1.cloudfront.net/api/admin/public")
    .then((response) => response.json())
    .then((data) => {
      let stats = data.publicDetails;
      totalUsers = numberWithCommas(stats.totalUsers);
      totalMails = numberWithCommas(stats.totalMails);
      activeWallets = numberWithCommas(stats.activeWallets);
      userCreditedAmount = numberWithCommas(
        Math.round(Number(stats.userCreditedAmount))
      );
      referralCreditedAmount = numberWithCommas(
        Math.round(Number(stats.referralCreditedAmount))
      );
      usersFromTopCompetition = numberWithCommas(
        Math.round(Number(stats.gmailUsers) + Number(stats.protonMailUsers))
      );

      document.getElementById("totalUsersWeb").innerHTML = totalUsers;
      document.getElementById("totalUsersTab").innerHTML = totalUsers;
      document.getElementById("totalUsersMobile").innerHTML = totalUsers;

      document.getElementById("totalMailsWeb").innerHTML = totalMails;
      document.getElementById("totalMailsTab").innerHTML = totalMails;
      document.getElementById("totalMailsMobile").innerHTML = totalMails;

      document.getElementById("activeWalletsWeb").innerHTML = activeWallets;
      document.getElementById("activeWalletsTab").innerHTML = activeWallets;
      document.getElementById("activeWalletsMobile").innerHTML = activeWallets;

      document.getElementById("userCreditedAmountWeb").innerHTML =
        userCreditedAmount;
      document.getElementById("userCreditedAmountTab").innerHTML =
        userCreditedAmount;
      document.getElementById("userCreditedAmountMobile").innerHTML =
        userCreditedAmount;

      document.getElementById("referralCreditedAmountWeb").innerHTML =
        referralCreditedAmount;
      document.getElementById("referralCreditedAmountTab").innerHTML =
        referralCreditedAmount;
      document.getElementById("referralCreditedAmountMobile").innerHTML =
        referralCreditedAmount;

      document.getElementById("usersFromTopCompetitionWeb").innerHTML =
        usersFromTopCompetition;
      document.getElementById("usersFromTopCompetitionTab").innerHTML =
        usersFromTopCompetition;
      document.getElementById("usersFromTopCompetitionMobile").innerHTML =
        usersFromTopCompetition;
    });
});
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
