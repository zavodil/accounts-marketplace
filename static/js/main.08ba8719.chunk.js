(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo.af8e6949.png"},107:function(e,t,a){e.exports=a(200)},112:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},137:function(e,t){},145:function(e,t){},161:function(e,t){},163:function(e,t){},192:function(e,t,a){},193:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(98),c=a.n(l),s=(a(112),a(105)),i=a(1),o=a.n(i),u=a(4),m=a(99),d=a(100),p=a(106),b=a(104),f=(a(60),a(129),a(130),a(131),a(132),a(35)),h=a(101),E=a.n(h),v=a(16),g=a(2),w=function(e){return parseFloat(e)/1e24||0};function y(e){var t=w(e.bet)+w(e.forfeit),a=w(e.claim);function n(){return(n=Object(u.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,e._near.contract.bet({bid_id:e.bidId},"200000000000000",String(parseInt(1.1*t*1e9))+"000000000000000");case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(String(1e9*a)+"000000000000000"),t.next=4,e._near.contract.claim({bid_id:e.bidId},"200000000000000",String(parseInt(1e9*a))+"000000000000000");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var s=t/10,i=t-t/100-s;e.ownerId||(s+=i,i=0);var m=1.2*t;return r.a.createElement("div",null,r.a.createElement("div",{className:"row py-3"},r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return function(e){return n.apply(this,arguments)}(e)}},"Bet for ",t.toFixed(2)," NEAR"),r.a.createElement("div",{className:"row py-1"}),a?r.a.createElement("button",{className:"btn btn-success btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return l(e)}},"Claim for ",a.toFixed(2)," NEAR"):r.a.createElement("button",{className:"btn btn-outline-warning btn-lg btn-block",disabled:!0,onClick:function(e){return l(e)}},"Already claimed - you can only bet")),r.a.createElement("div",{className:"row text-muted text-start"},"Price breakdown: ...",r.a.createElement("p",null,"The new price will be ",m.toFixed(2)," NEAR")))}function N(e){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e._near.contract.offer({profile_id:document.getElementById("offer_input").value},"200000000000000",String(parseInt(45e7))+"000000000000000");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return t(e)}},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("button",{className:"btn btn-primary",disabled:!e.signedIn,onClick:function(e){return t(e)}},"Offer current account in favor of"),r.a.createElement("input",{id:"offer_input",type:"text",className:"form-control",placeholder:"satoshi.testnet","aria-label":"Username","aria-describedby":"basic-addon1"}))))}var k=a(56),O=a.n(k),_=a(18),j=a(3),x=(a(192),a(28)),I=a.n(x);a(193);var S=function(e){return r.a.createElement("div",null,r.a.createElement(v.b,{to:"/bid/".concat(e.bidId),className:"btn btn-success",disabled:!e.signedIn},"Starts from ",w(e.price).toFixed(2)," NEAR"))};var A=function(e){var t=Object(n.useState)(e.bid),a=Object(j.a)(t,2),l=a[0],c=a[1],s=e.bidId,i=e.bid,m=Object(n.useCallback)(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.contract.get_bid({bid_id:s});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),[e._near,s]);return Object(n.useEffect)((function(){e.connected&&(i?c(i):m().then(c))}),[e.connected,i,m]),l?r.a.createElement("div",{className:"container m-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement(v.b,{className:"nav-link",to:"/bid/".concat(s)},s)),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row py-2"})),r.a.createElement("div",{className:"col-6"},r.a.createElement(S,Object.assign({},e,{bidId:s,price:l.bet_price}))))):r.a.createElement("div",{className:"container m-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))},C=a(22),R=a.n(C);var T=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),m=i[0],d=i[1],p=Object(n.useState)(I()()),b=Object(j.a)(p,1)[0],f=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(_.a)(l),n=a.length>0?a[a.length-1]:null,t.next=4,e._near.contract.get_top_bets({from_key:n,limit:25});case 4:r=t.sent,a.push.apply(a,Object(_.a)(r)),0===r.length&&d(!1),c(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){e.connected&&d(!0)}),[e.connected]);var h=l.map((function(t){var a=Object(j.a)(t,2),n=a[0],l=a[1],c="".concat(b,"-").concat(l);return r.a.createElement(A,Object.assign({},e,{key:c,bidId:l,rating:n}))})),E=r.a.createElement("div",{className:"d-flex justify-content-center",key:"".concat(b,"-loader")},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Account names on sale")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(R.a,{pageStart:0,loadMore:f,hasMore:m,loader:E},h)))))};a(199);var q=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),m=i[0],d=i[1],p=Object(n.useState)(I()()),b=Object(j.a)(p,1)[0],f=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(_.a)(l),n=a.length>0?a[a.length-1]:null,t.next=4,e._near.contract.get_top_claims({from_key:n,limit:25});case 4:r=t.sent,a.push.apply(a,Object(_.a)(r)),0===r.length&&d(!1),c(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){e.connected&&d(!0)}),[e.connected]);var h=l.map((function(t){var a=Object(j.a)(t,2),n=a[0],l=a[1],c="".concat(b,"-").concat(l);return r.a.createElement(A,Object.assign({},e,{key:c,bidId:l,rating:n}))})),E=r.a.createElement("div",{className:"d-flex justify-content-center",key:"".concat(b,"-loader")},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Claims")),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col"},r.a.createElement(R.a,{pageStart:0,loadMore:f,hasMore:m,loader:E},h)))))};var B=function(e){var t=Object(n.useState)(null),a=Object(j.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!0),i=Object(j.a)(s,2),m=i[0],d=i[1],p=Object(n.useCallback)(Object(u.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e._near.contract.get_global_stats()]);case 2:return a=t.sent,n=Object(j.a)(a,1),r=n[0],t.abrupt("return",{numProfiles:(l=r)[0],numBids:l[1],totalCommission:w(l[2]),numOffers:l[3],numBets:l[4],numClaims:l[5],numAcquisitions:l[6]});case 6:case"end":return t.stop()}var l}),t)}))),[e._near]);return Object(n.useEffect)((function(){e.connected&&p().then((function(e){c(e),d(!1)}))}),[e.connected,p]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},m?r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))):r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-8"},r.a.createElement("div",null,r.a.createElement("h4",null,"Hello"),r.a.createElement("ul",null,r.a.createElement("p",null,"This is NEAR Account Marketplace. It allows you to sell, bet and buy NEAR Account names.")),r.a.createElement("h4",null,"For whom"),r.a.createElement("ul",null,r.a.createElement("p",null,"Founders \u2014 to allow you to find brilliant account names and place them onto the market for selling."),r.a.createElement("p",null,"Believers \u2014 to participate in finding fair price, taking rewards for your faithful evaluation and wisdom."),r.a.createElement("p",null,"Claimers \u2014 to obtain perfect account names for inner usage, personal collection or further resales.")),r.a.createElement("h4",null,"Basics"),r.a.createElement("ul",null,r.a.createElement("p",null,"Initial placement costs ~0.42 NEAR. Initial claim price is 1 NEAR. There are two operations available:"),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Place a bet. "),"This costs half of the current price (starts from 0.5 NEAR at initial state). The payment goes to previous believers, and the price increases for x1.2 times.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Claim an account. "),"This costs full price. You need to wait 48 hours to make sure no one wants to bet on the account. If someone will bet within 48 hours, you will receive all your funds back plus forfeits paid by believer who bets. If no one will bet, the account is totally yours, congratulations!"))),r.a.createElement("h4",null,"Rewards for bets"),r.a.createElement("ul",null,r.a.createElement("p",null,"Each new bet triggers the reward distribution function for previous believers. This means, if you even bet only once, you will receive rewards multiple times. The function converges to 25% rewards for each bet."),r.a.createElement("p",null,r.a.createElement("i",null,"Example. Let's say, you bet 0.6 NEAR for ",r.a.createElement("strong",null,"apple.near"),". In a couple days its price has been increased by series of bets, and you have been received 0.75 NEAR rewards for that bet in total."))),r.a.createElement("h4",null,"Rewards for claims"),r.a.createElement("ul",null,r.a.createElement("p",null,"Claim is the most important and unique procedure as it finalizes the lifetime of account on the market. The rewards for the successful claim are the biggest."),r.a.createElement("p",null,"First of all, the founder of the account gets 25% of claim price as additional reward. It means, even not betting at all, it's still possible to take huge rewards by bringing awesome account names to the market."),r.a.createElement("p",null,r.a.createElement("i",null,"Due to importance of claiming accounts, as it helps for the main purpose of the project, the marketplace takes zero commission for claiming."))),r.a.createElement("h4",null,"Commission"),r.a.createElement("ul",null,r.a.createElement("p",null,"Marketplace takes 5% commission for each bet plus small constant for initial placement (~0.42 NEAR)."),r.a.createElement("p",null,"Marketplace takes 5% commission in addition, in case of betting for account which is under claiming. This is necessary to prevent holding the account with no willing to actually claim it. Strategies that disturbing market in such way are not welcomed as they diverge with the purpose of the marketplace."),r.a.createElement("p",null,"Marketplace takes zero commission for claim.")),r.a.createElement("h4",null,"Forfeits"),r.a.createElement("ul",null,r.a.createElement("p",null,"Forfeit is an additional cost for placing a bet while the account is under claiming. Its value grows linearly from 0% at the moment when claim requested, and up to 20% at the end of 48-hours period. Forfeits are paid to claimers directly. The purpose of forfeit is to pay for claimers' willing to obtain an account.")),r.a.createElement("h4",null,"Specific cases"),r.a.createElement("ul",null,r.a.createElement("p",null,"Knowing the mechanics, try to find your personal way to reach the maximal value. There are couple examples that may help you."),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Using multiple accounts and place series of bets. "),"As all Believers behind their accounts are anonymous, you can use multiple accounts while betting. That's why there is no reason to disallow to bet multiple times from the same account - you can simply bet from another one. You may use this trick if you want to hide your interest or intentions by spreading up your bets between multiple accounts.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Sell the account for the full price. "),"If you are sure about fair price, you shouldn't wait until others bet. You can simply bet as many times as necessary to increase the price up to the value that makes sense to you. In this case you may take up to 87.5% rewards taken from claimer directly, not sharing with anyone.")),r.a.createElement("p",null,"Also mechanics is tuned in such way to make sure it's impossible to take less than you bet.")),r.a.createElement("h4",null,"Account claiming procedure"),r.a.createElement("ul",null,r.a.createElement("p",null,"1. (For experts) replace public key 2. TBD")),r.a.createElement("h4",null,"Example of distribution"),r.a.createElement("ul",null,r.a.createElement("p",null,"The following spreadsheet shows rewards distribution for an account that has been bet for 15 times and claimed afterwards. 0-th bet means initial offering from founder, all other lines correspond to bets."),r.a.createElement("p",null,r.a.createElement("samp",null,"Claim price: 15.407",r.a.createElement("br",null),"Sum of bets: 36.4342",r.a.createElement("br",null),"Commission: 2.2175",r.a.createElement("br",null),"0 bet:  0.4167,  rewards:  4.6018,   ratio:  11.0442",r.a.createElement("br",null),"1 bet:  0.5000,  rewards:  0.6250,   ratio:  1.2500",r.a.createElement("br",null),"2 bet:  0.6000,  rewards:  0.7500,   ratio:  1.2500",r.a.createElement("br",null),"3 bet:  0.7200,  rewards:  0.9000,   ratio:  1.2500",r.a.createElement("br",null),"4 bet:  0.8640,  rewards:  1.0800,   ratio:  1.2500",r.a.createElement("br",null),"5 bet:  1.0368,  rewards:  1.2959,   ratio:  1.2499",r.a.createElement("br",null),"6 bet:  1.2442,  rewards:  1.5550,   ratio:  1.2499",r.a.createElement("br",null),"7 bet:  1.4930,  rewards:  1.8656,   ratio:  1.2496",r.a.createElement("br",null),"8 bet:  1.7916,  rewards:  2.2375,   ratio:  1.2489",r.a.createElement("br",null),"9 bet:  2.1499,  rewards:  2.6811,   ratio:  1.2471",r.a.createElement("br",null),"10 bet:  2.5799,  rewards:  3.2047,   ratio:  1.2422",r.a.createElement("br",null),"11 bet:  3.0959,  rewards:  3.8073,   ratio:  1.2298",r.a.createElement("br",null),"12 bet:  3.7150,  rewards:  4.4595,   ratio:  1.2004",r.a.createElement("br",null),"13 bet:  4.4581,  rewards:  5.0908,   ratio:  1.1419",r.a.createElement("br",null),"14 bet:  5.3497,  rewards:  5.8400,   ratio:  1.0917",r.a.createElement("br",null),"15 bet:  6.4196,  rewards:  9.6294,   ratio:  1.5000",r.a.createElement("br",null),"Sum of rewards: 49.6237")))),r.a.createElement("div",null,r.a.createElement("h3",null,"Global Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Num active profiles: ",l.numProfiles),r.a.createElement("li",null,"Num active bids: ",l.numBids))))))};var M=function(e){var t=Object(g.f)().profileId,a=Object(n.useState)([]),l=Object(j.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)(null),m=Object(j.a)(i,2),d=m[0],p=m[1],b=Object(n.useState)(!1),f=Object(j.a)(b,2),h=f[0],E=f[1],v=Object(n.useState)(I()()),w=Object(j.a)(v,1)[0];e._near.getProfile&&Promise.resolve(Object(u.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=p,a.next=3,e._near.getProfile(t);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}}),a)})))());var y=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(_.a)(c),n=a.length>0?a[a.length-1]:null,t.next=4,e._near.contract.get_top_bets({from_key:n,limit:25});case 4:r=t.sent,a.push.apply(a,Object(_.a)(r)),0===r.length&&E(!1),s(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){e.connected&&E(!0)}),[e.connected]);var k=c.map((function(t){var a=Object(j.a)(t,2),n=a[0],l=a[1],c="".concat(w,"-").concat(l);return r.a.createElement(A,Object.assign({},e,{key:c,bidId:l,rating:n}))})),O=r.a.createElement("div",{className:"d-flex justify-content-center",key:"".concat(w,"-loader")},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement(N,e),d?r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},r.a.createElement("h3",null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Bets volume: ",d.betsVolume.toFixed(2)," NEAR"),r.a.createElement("li",null,"Available rewards: ",d.availableRewards.toFixed(2)," NEAR"),r.a.createElement("li",null,"TODO BUTTON TO COLLECT REWARDS"),r.a.createElement("li",null,"TODO PRINT OTHER LOCAL STATS"))):r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Successful claims"),r.a.createElement(R.a,{pageStart:0,loadMore:y,hasMore:h,loader:O},k)),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Participating"),r.a.createElement(R.a,{pageStart:0,loadMore:y,hasMore:h,loader:O},k))))},P=function(e){return e?{isAtMarket:!0,numClaims:e.num_claims,claimedBy:e.claim,bets:e.bets,betPrice:e.bet_price,claimPrice:e.claim_price,forfeit:e.forfeit,onAcquisition:e.on_acquisition}:{isAtMarket:!1,numClaims:0,claimedBy:null,bets:[],betPrice:0,claimPrice:0,forfeit:null,onAcquisition:!1}};var F=function(e){var t=Object(g.f)().bidId;console.log(t);var a=Object(n.useState)(null),l=Object(j.a)(a,2),c=l[0],s=l[1],i=e.refreshTime,m=e.hidden,d=Object(n.useCallback)(Object(u.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=P,a.next=3,e._near.contract.get_bid({bid_id:t});case 3:return a.t1=a.sent,(n=(0,a.t0)(a.t1)).refreshTime=i,a.abrupt("return",n);case 7:case"end":return a.stop()}}),a)}))),[e._near,t,i]);return console.log(c),Object(n.useEffect)((function(){e.connected&&!m&&d().then(s)}),[e.connected,d,t,m]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},c?r.a.createElement("div",{className:"bid m-2"},r.a.createElement("div",{className:"bid-body text-start"},r.a.createElement("h3",null,t),c.claimedBy?r.a.createElement("div",null,r.a.createElement("p",null,"Claimed by ",c.claimedBy[0])):r.a.createElement("div",null,r.a.createElement("p",null,"Not claimed by anyone.")),r.a.createElement("div",null,r.a.createElement("p",null,"Accounts who bet:"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,c.bets.map((function(e,t){return r.a.createElement("tr",{key:t},e)})))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(y,Object.assign({},e,{bidId:t,bidInfo:c,bet:c.betPrice,forfeit:c.forfeit,claim:c.claimPrice})))):r.a.createElement("div",{className:"bid m-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))))))},L="berry.cards"===window.location.hostname?{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",archivalNodeUrl:"https://rpc.mainnet.internal.near.org",contractName:"cards.berryclub.ek.near",walletUrl:"https://wallet.near.org"}:{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",archivalNodeUrl:"https://rpc.testnet.internal.near.org",contractName:"dev-1615748079260-4142178",walletUrl:"https://wallet.testnet.near.org"},D=function(e){return{participation:e.participation,acquisitions:e.acquisitions,betsVolume:w(e.bets_volume),availableRewards:w(e.available_rewards),profitTaken:w(e.profit_taken),numOffers:e.num_offers,numBets:e.num_bets,numClaims:e.num_claims,numAcquisitions:e.num_acquisitions}},U=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e))._near={},n._near.lsKey=L.contractName+":v01:",n._near.lsKeyRecentCards=n._near.lsKey+"recentCards",n.state={connected:!1,isNavCollapsed:!0,account:null,requests:null,recentCards:O.a.get(n._near.lsKeyRecentCards)||[]},n._initNear().then((function(){n.setState({signedIn:!!n._near.accountId,signedAccountId:n._near.accountId,connected:!0})})),n}return Object(d.a)(a,[{key:"_initNear",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.keyStores.BrowserLocalStorageKeyStore,e.next=3,f.connect(Object.assign({deps:{keyStore:t}},L));case 3:if(a=e.sent,this._near.keyStore=t,this._near.near=a,this._near.walletConnection=new f.WalletConnection(a,L.contractName),this._near.accountId=this._near.walletConnection.getAccountId(),this._near.account=this._near.walletConnection.account(),this._near.contract=new f.Contract(this._near.account,L.contractName,{viewMethods:["get_profile","get_bid","get_top_bets","get_top_claims","get_global_stats"],changeMethods:["offer","bet","claim","finalize","acquire"]}),this._near.profiles={},this._near.getProfile=function(e){return e in r._near.profiles||(r._near.profiles[e]=Promise.resolve(Object(u.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._near.contract.get_profile({profile_id:e});case 2:return a=t.sent,n=a?D(a):{participation:[],acquisitions:[],betsVolume:w(0),availableRewards:w(0),profitTaken:w(0),numOffers:0,numBets:0,numClaims:0,numAcquisitions:0},t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))())),r._near.profiles[e]},!this._near.accountId){e.next=18;break}return e.next=15,this._near.getProfile(this._near.accountId);case 15:n=e.sent,console.log(n),this.setState({profile:n});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),"Accounts Marketplace",e.next=4,this._near.walletConnection.requestSignIn(L.contractName,"Accounts Marketplace");case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._near.walletConnection.signOut(),this._near.accountId=null,this.setState({signedIn:!!this._accountId,signedAccountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"popRequest",value:function(e){var t=this.state.requests.slice(1);this.setState({requests:t},e)}},{key:"addRequest",value:function(e,t){var a=this.state.requests.slice(0);a.push(e),this.setState({requests:a},t)}},{key:"addRecentCard",value:function(e){var t=this.state.recentCards.slice(0),a=t.indexOf(e);-1!==a&&t.splice(a,1),t.unshift(e),t=t.slice(0,5),O.a.set(this._near.lsKeyRecentCards,t),this.setState({recentCards:t})}},{key:"refreshAllowance",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("You're out of access key allowance. Need sign in again to refresh it"),e.next=3,this.logOut();case 3:return e.next=5,this.requestSignIn();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(s.a)({_near:this._near,updateState:function(t,a){return e.setState(t,a)},popRequest:function(t){return e.popRequest(t)},addRequest:function(t,a){return e.addRequest(t,a)},addRecentCard:function(t){return e.addRecentCard(t)},refreshAllowance:function(){return e.refreshAllowance()}},this.state),a=this.state.connected?this.state.signedIn?r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Sign out (",this.state.signedAccountId,")")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.requestSignIn(t)}},"Sign in with NEAR Wallet")):r.a.createElement("div",null,"Connecting... ",r.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{basename:""},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(v.b,{className:"navbar-brand",to:"/",title:"near.bet"},r.a.createElement("img",{src:E.a,alt:"NEAR Accounts Marketplace",className:"d-inline-block align-middle"}),"[BETA] NEAR Accounts Marketplace"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link","aria-current":"page",to:"/"},"Accounts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link","aria-current":"page",to:"/claims"},"Claims")),this.state.signedIn&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link","aria-current":"page",to:"/profile/".concat(this.state.signedAccountId)},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link","aria-current":"page",to:"/rules"},"Rules"))),r.a.createElement("form",{className:"d-flex"},a)))),r.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/kouprin/accounts-marketplace","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(T,t)),r.a.createElement(g.a,{exact:!0,path:"/claims"},r.a.createElement(q,t)),r.a.createElement(g.a,{exact:!0,path:"/rules"},r.a.createElement(B,t)),r.a.createElement(g.a,{exact:!0,path:"/profile/:profileId"},r.a.createElement(M,t)),r.a.createElement(g.a,{exact:!0,path:"/bid/:bidId"},r.a.createElement(F,t)))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.08ba8719.chunk.js.map