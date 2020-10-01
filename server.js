const express = require("express");
const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 5050;

//listening on port
http.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/cc.html");
});

app.get("/bot", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// Socket
const io = require("socket.io")(http);

function reply(message) {
	switch (message) {
		case "*":
			return {
				message:
					"1. General IP Queries<br>2. Learning Path<br>3. Bitrix Issues<br>4. Live Project<br>5. Genral Questions/Error/Induction<br><br>",
			};

		case "1":
			return {
				message:
					"i. IP Start <br> ii. IP End <br>iii. Letter<br>iv. Eligibility<br>v. Policies<br>vi. Certificate<br><br>",
			};

		case "2":
			return {
				message:
					"a. Token<br>b. Quiz<br>c. Login/Register Issues<br>d. Other Query/Upload Code<br>e. Start-End<br>f. Task<br>g. Work Report<br>h. Result<br><br>",
			};

		case "3":
			return {
				message: "I. Account<br>II. Workgroup<br>III. Clock out-in<br><br>",
			};

		case "4":
			return {
				message: "A. Starting <br>B. Doubts<br>C. Problem Statement<br><br>",
			};

		case "I":
			return {
				message:
					"<ol>Q. I m not able to access my Bitrix24 account?</ol><br><br>A.<li> Go to https://cloudcounselage24.bitrix24.com/ On the Login page.</li><li> In the, �Enter the phone number or email�, type in your email id that you have registered with Cloud Counselage and Click �Forgot Password�.</li><li>In case the problem persists, please write a mail to hrsupport@cloudcounselage.in</li><br><br><br>Q. By when will we receive access to Bitrix24?<br><br>A. If you have submitted the �New Joinee Form� after the 1st of March, please wait till the 31st of March to receive your access.<br><br><br>Q. My Efficiency is 0% what should I do?<br><br>A. Ensure that you have clicked �Start� when you resume a task, the �Finish� button gets active only after the task is started. Once you complete the task you can then click on �Finish� and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.<br><br>",
			};

		case "II":
			return {
				message:
					"Q. How many workgroups will an intern be a part of?/ How many workgroups should I be in?<br><br>A. Every intern should be a part of 2 workgroups.<li>1. '202003-IP' -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.</li><li>2. '202003-IP' - Technology' -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example '202003 - IP - Python' for students who enrolled for python.<li>If anyone has not been added to any of these workgroups, kindly message 'Cloud Counselage HR ' regarding the same over bitrix24 platform.</li><br><br><br>Q. I am having trouble finding the workgroup ( no workgroup is visible)<br><br>A. Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName.<li> Ex '202003-IP - DevOps'. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups '202003-IP' which is a general workgroup and the other one is '202003-IP-Technology' which is a technology-specific workgroup.</li><br><br><br>Q. I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page<br><br>A. Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page.<br><br><br>Q. Not able to see the task as not part of the IP workgroup.<br><br>A. Please message �Cloud Counselage HR� in Bitrix24<br><br><br>Q. I have not been added to the technology I preferred to work on?<br><br>A. We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.<br><br>",
			};

		case "iv":
			return {
				message:
					"Q. What is the job profile? Will we be able to work only in the tech we have chosen for the internship?<br><br>A. <li>Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'.</li> <li>Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.</li><br><br>  ",
			};

		case "e":
			return {
				message:
					"Q. When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?<br><br>A. The dates to begin the learning paths (LP) are: - <br>LP1 - 01/03/2020<br>LP2 - 18/03/2020<br>LP3 - 02/04/2020<li>All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame.</li><br><br><br>Q. What to do after completing LP1/ LP2/ LP3?<br><br>A. Mark your task as finished and wait for the next instructions.<br><br><br>Q. What to do after LP3?<br><br>A. You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.<br><br> ",
			};

		case "a":
			return {
				message:
					"Q. Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- 'User Not Found'/ Website Redirection Issue / Tokens not working.<br><br>A. Please watch the videos shared with the invite and you should not face any problems in accessing the training.Please follow the protocol shown in the videos.<br><br><br>Q. I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working<br><br>A. For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.<br><br><br>Q. I tried it 3-4 times and have to enter token each time I visit it.<br><br>A. We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:<br>1. One for each technology, you're a part of<br>2. The lp1 home page<br>3. The 6 tokens(one for each step)<br><br>",
			};

		case "c":
			return {
				message:
					"Q. Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?<br><br>A. Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.<br><br><br>Q. I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task<br><br>A.  Ensure you're using the right token<br><br><br>Q. Do I need to register every time I do different tasks of lp1?<br><br>A. There are codes in the LP1 assignment, and each time you have to register also, please check your task description.<br><br><br>Q.  I am not able to view a page/ I am logged in the training and still the website asks me to login<br><br>A. <li>This could be because of some issue in the cookies or extension in your browser.</li> <li>Please try again with a different browser or open the tab with incognito mode. Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you.</li><br><br>",
			};

		case "vi":
			return {
				message:
					"Q. Do I need to pass with the certificate in training.<br><br>A. No, but please ensure you complete the training.<br><br><br>Q. Can I do certification for the training provided in LP2?<br><br>A. Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to �Cloud Counselage HR� or write to hrsupport@cloudcounselage.in.<br><br><br>Q. If we are working on more than one technology, are those technologies added to the certificate?<br><br>A. You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you�re selected for.<br><br>  ",
			};

		case "f":
			return {
				message:
					"Q. I am not able to see my tasks.<br><br>A. Please remove the default 'In Progress' from your filter of the task section and try.<br><br><br>Q. Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?<br><br>A. It's preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).<br><br><br>Q. I had press finished button of LP1 task but want to resume the task, how to do that?<br><br>A. You can go back to that task and then click on 'More' and then 'resume' to restart that task.<br><br><br>Q. What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?<br><br>A. <li>LP3 will be assignment based and its execution and content vary from technology to technology.</li> <li>This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.</li><br><br>",
			};

		case "g":
			return {
				message:
					"Q. What do we do in the work report?<br><br>A. As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on 'send to supervisor'.<br><br><br>Q. Can you help me by telling how can I get to know about my progress of LP 1<br><br>A. There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.<br><br><br>Q. How can we check our weekly hours?<br><br>In the menu select 'time and reports' ->worktime and then you could see your worktime or click on this link once you�re logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/ <br><br><br>Q. I have not got the acknowledgment from you regarding the weekly report.<br><br>A. Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation.<br><br> ",
			};

		case "i":
			return {
				message:
					"Q. I just joined the group and I am not understanding what to do further. How do I start my internship?<br><br>A. Please go through the mail from which you have accepted the invite and check the task section as well.<br><br><br>Q. I have complete one training, I didn't find any options to continue my training.<br><br>A. Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.<br><br>",
			};

		case "b":
			return {
				message:
					"Q. Unable to access the quiz<br><br>A. Please retry after some time in an incognito window<br><br><br>Q. How do I access my quiz?<br><br>A. As mentioned in the video: -<br>Step1: Go to lp1 module<br>Step2: Select module<br>Step3: Put token (it will direct you to the home screen if the token is correct)<br>Step4: Again go to lp1 module n select that module<br>Step5: You will get the access by now<br>Step6: Register there (each time for every module)<br>Step7: Give the quiz<br>Step8: Logout<br><br><br>Q. What do I do after completing the quiz? how to complete the entire lp1? <br><br>A. <li>There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it.</li><li> If you are done with LP3 please wait for Live Projects to begin.</li><br><br><br>",
			};

		case "h":
			return {
				message:
					"Q. I am not getting results of the training.<br><br>A. They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training.<br><br>",
			};

		case "5":
			return {
				message:
					"Q. Can we be online after 1 hr in a day?<br><br>A. Yes, you can be.<br><br><br>Q. Which Browser I should use?<br><br>A. Google Chrome is recommended.<br><br><br>Q. Can we visit the office? How many times do we have to visit the office for this internship?<br><br>A. As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment.<br><br><br>Q.  The web pages on mobile are not showing properly.<br><br>A. They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the 'show as desktop' mode of your browser.<br><br><br>Q. Can we extend this internship?<br><br>A. Yes, you can extend your internship by being part of our other online programs like, �Online Career Program�.<br><br><br>Q. Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I�m not interested in.<br><br>A. You cannot switch the technology currently. You have to continue with the one you are selected for. <li>In the case of multiple form entries, you just got selected for one of them; the first one that you entered.</li> <li>You cannot make a switch right now.</li><br><br><br>Q. Can we skip any training if we are already clear with the basics?<br><br>A. No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.<br><br><br>Q. Resource links not working. What to do? Should we skip?<br><br>A. Please do not skip any piece of training, in case you're not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same.<br><br><br>Q. What to do when our university exams start?<br><br>A. We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.<br><br><br>Q. Is it okay to mention this internship as ongoing for college records?<br><br>A. Yes, we'll provide every intern a joining letter as soon as all interns are inducted.<br><br><br>Q.  Can we do another internship with IP?<br><br>A. Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP.<br><br><br>Q. Could I have done this training from other websites/ resources?<br><br><br>A. Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice.<br><br><br>Q.  Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?<br><br>A.For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time. <br><br><br>Q. Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?<br><br>A. All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.<br><br><br>Q. In my work time I can see one exclamation mark?/ What does the remaining time mean?<br><br>A. It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.  <br><br><br>Q. I  am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?<br><br>A. This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again.<br><br><br>Q. I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.<br><br>A.We have created a separate page with a pre-recorded induction, please visit it;https://www.cloudcounselage.co.in/ipinducti <br><br>",
			};

		case "A":
			return {
				message:
					"Q. What to do after Live Projects? Are we getting an offer letter/Stipend?<br><br>A. Submit your project and once it's reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you're interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.<br><br>",
			};

		case "B":
			return {
				message:
					"Q. What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?<br><br><br>Q. What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?<br><br>A. Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.<br><br><br>Q. Live Project/ LP3 has to be submitted individually or it will be a group project?<br><br>A. All the LP3/  Live Projects are on an individual scale.<br><br><br>Q.  I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br><br>A. As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)<br><br><br>Q. I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br><br>A. As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)<br><br><br>Q. Will Live Projects have only one technology or a mixture of technologies?<br><br>A. Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.<br><br>",
			};

		case "iii":
			return {
				message:
					"Q. I didn't get my appointment letter yet.<br><br>A. If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24.<br><br><br>Q. I have got another attachment called �noname� or �win.dat� with my Appointment letter, what should I do about it? Will it cause any harm?<br><br>A. We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won�t cause any harm to your system.<br><br><br>Q. When will we get a joining letter?<br><br>A. Joining letter to all the interns will be provided on or before the 31st of March 2020.<br><br><br>Q. When will we get an internship completion letter?<br><br>A. This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project.<br><br> ",
			};

		case "d":
			return {
				message:
					"Q.  I have a query with respect to LP3, what should I do and whom should I ask?<br><br>A. As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message.<br><br><br>Q. Are LP1/ LP2/ LP3 a part of the Live Project?<br><br>A.  LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.<br><br><br>Q. Will these training be enough for us to complete the LP3 and Live Project.<br><br>A. The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.<br><br><br>Q. Will you provide mentorship or doubt clearing sessions in this internship?<br><br>A.  As this is an internship you�re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. �202003 - IP� and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to �Cloud Counselage HR� on Bitrix24 Chat.<br><br><br>Q. Is it necessary to attend LP1 for other domains as well if we want to take its training.<br><br>A. LP1 training is common across all the technologies<br><br><br>Q. Why only this training for LP2?<br><br>A. They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.<br><br><br>Q. Where do we push the code in LP3?<br><br>A. Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.<br><br> ",
			};

		case "c":
			return {
				message:
					"Q. Live project's use case will be provided or can we have our own use case?<br><br>A. Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case.<br><br>",
			};

		case "v":
			return {
				message:
					"Q. What are the company policies for IP interns?<br><br>The company policies will be published on www.cloudcounselage.co.in/ippolicies<br><br>",
			};

		case "C":
			return {
				message:
					"Q. Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?<br><br>A. Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.<br><br><br>Q. For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?<br><br>A. Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check.<br><br>",
			};

		case "III":
			return {
				message:
					"Q. I forgot to clock in for a few days, will this affect my internship?<br><br>A. This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.<br><br><br>Q. Is it necessary to clock-in if I am done with my tasks?<br><br>A. Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.<br><br><br>Q. Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?<br><br>A. If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups.<br><br>",
			};

		case "i":
			return {
				message:
					"Q. When internship will be finished<br><br>A. The period of internship will be 3 month.<br><br>",
			};

		default:
			return { message: 'Please enter "*" to get main menu' };
	}
}

io.on("connection", (socket) => {
	console.log("Connected...");

	//socket
	socket.on("message", (msg) => {
		console.log(msg);
		let { message } = reply(msg.message);

		let date = new Date();
		let time = `${date.getHours()}:${date.getMinutes()}`;
		let emittingMessage = {
			message,
			user: "Bot",
			time,
		};
		console.log(reply(msg.message));
		socket.emit("message", emittingMessage);
	});
});
