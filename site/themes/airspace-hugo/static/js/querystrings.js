function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var param_loc = getUrlVars()["loc"];
// console.log('param_loc: ' + param_loc);
var param_kw = getUrlVars()["key"];

if (typeof param_kw === 'undefined' || param_kw === null) {
    param_kw = "personal injury lawyers"
}

// console.log('param_kw: '+param_kw);
//var param_loc = '[param_loc]';
//var param_kw = '[param_kw]';
var param_ver = '[param_ver]';
//var param_pa = '[param_pa]';
var param_pa = getUrlVars()["pa"];
// console.log('param_pa: '+param_pa);
var kw_inject = param_kw.replace(/\+/g, ' ');
var kw_inject = kw_inject.replace(/\-/g, ' ');
var testing = param_kw.split("-").splice(-2).join(" ");

$(".paragraph").html("Wilshire Law Firm is an award-winning <span class='insertKW'></span> with a history of winning our client's cases. Our <span class='insertKW'></span> is committed to protecting your rights and ensuring that you are paid generously for your rights being violated. We use legal techniques that we know work inside and outside of a courtroom. By fighting aggressively and with the backing of over 100 professionals, Wilshire Law Firm has put more than <strong>$400 Million</strong> into our client's hands. Take action today and hire the most reliable legal representation by calling Wilshire Law Firm, a preeminent California <span class='insertKW'>personal injury lawyers</span> for a free case consultation. Best of all, our <span class='insertKW'></span> works on a contingency fee, meaning you don't pay unless we win your case. What are you waiting for? Call now!");


// console.log(kw_inject);
/* DYNAMIC CONTENT */
jQuery(document).ready(function () {
    if (testing == 'law firm' || testing == "Law Firm" || testing == "Law firm" || testing == "law Firm") {

        jQuery(".paragraph").html("Wilshire Law Firm is an award-winning <span class='insertKW'></span> with a history of winning our client's cases. Our <span class='insertKW'></span> is committed to protecting your rights and ensuring that you are paid generously for your rights being violated. We use legal techniques that we know work inside and outside of a courtroom. By fighting aggressively and with the backing of over 100 professionals, Wilshire Law Firm has put more than <strong>$400 Million</strong> into our client's hands. Take action today and hire the most reliable legal representation by calling Wilshire Law Firm, a preeminent California <span class='insertKW'>personal injury lawyers</span> for a free case consultation. Best of all, our <span class='insertKW'></span> works on a contingency fee, meaning you don't pay unless we win your case. What are you waiting for? Call now!");


        jQuery(".paragraph").html("Wilshire Law Firm is an award-winning <span class='insertKW'></span> with a history of winning our client's cases. Our <span class='insertKW'></span> is committed to protecting your rights and ensuring that you are paid generously for your rights being violated.");
        jQuery(".insertKW").html(kw_inject);
    } else if (testing !== "law firm" || testing != "Law Firm") {
        jQuery(".paragraph").html("Wilshire Law Firm's award-winning <span class='insertKW'>personal injury lawyers</span> have a history of winning our client's cases. Our <span class='insertKW'></span> are committed to protecting your rights and ensuring that you are paid generously for your rights being violated. We use legal techniques that we know work inside and outside of a courtroom. By fighting aggressively and with the backing of over 100 professionals, Wilshire Law Firm has put more than <strong>$400 Million</strong> into our client's hands. Take action today and hire the most reliable legal representation by calling Wilshire Law Firm's team of <span class='insertKW'>personal injury lawyers</span> today for a free case consultation. Best of all, our <span class='insertKW'></span> work on contingency fee, meaning you don't pay unless we win your case. What are you waiting for? Call now!");


        jQuery(".paragraph").html("Wilshire Law Firm's award-winning <span class='insertKW'></span> have a history of winning our client's cases. Our <span class='insertKW'></span> are committed to protecting your rights and ensuring that you are paid generously for your rights being violated.");
        jQuery(".insertKW").html(kw_inject);
        $(".headline__big-text").bigtext();
        $(".headline__big-text2").bigtext();
        $(".subhero__recovered-text1").bigtext();
    }



if (param_pa != '') {
/* CAR */
        var newPara;
        var newImage;

        switch(param_pa) {
            case 'car':
                newImage = "/img/MVTLA-president.png";
                newPara = "In order to get the compensation that you deserve, you must work with the best car accident law firm in your area. Our dedicated team of car accident lawyers will fight for you against the insurance company's attempts to weaken your claim. Because of this, Wilshire Law Firm has familiarized itself with how insurance companies work and we know how to counteract their delay-and-deny tactics. It is common for us to double, triple, or even quadruple an insurance company's initial settlement offer. We have won more than <strong>$400 Million</strong> for our clients. If you want to get maximum compensation for your damages, injuries and losses, call Wilshire Law Firm today. With our team of expert car accident attorneys, you will never have to settle for less than you deserve. Call now or tap the button below for a free consultation!";

                break;
            case 'moto' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/Top1percent_badge_motorcycle_250x250_transparent.png";
                newPara = "In the event of a motorcycle accident, it's likely that you will be the one with injuries requiring costly treatments. For many, these treatments are expensive enough to cause motorcyclists to fall into debt. Wilshire Law Firm's motorcycle accident lawyers believe that you should not have to suffer because of another driver's bad decision. We can help you recover money spent on medical bills, motorcycle repairs, lost wages, and for your pain and suffering. Our motorcycle accident attorneys have won hundreds of millions on behalf of our clients. We understand how much financial stress a motorcycle accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'bike' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/Top1percent_badge_bicycle_250x250_transparent.png";
                newPara = "Motorists cause bicycle accidents because they fail to yield the right-of-way, intrude into bike lanes, drive distracted, fail to stop at a red light, and for various other reasons. Bicycle accidents can result in having to pay thousands of dollars in treatments, but a Wilshire Law Firm bicycle lawyer will fight on your behalf. Our bicycle accident lawyers will negotiate with insurance companies and use their years of experience to win you the highest amount possible for your claim. We understand how much financial stress a bicycle accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'com' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2018/07/top10-trucking-e1532368967565.png";
                newPara = "Accidents where a commercial vehicle is at-fault tend to cause severe injury and substantial property damage. Treatments for such injuries can cost a person tens of thousands of dollars. Wilshire Law Firm's commercial vehicle accident lawyers can help you receive compensation to cover these costs. Our lawyers are not only ranked as the top 1% in the nation, but they have recovered more than <strong>$400 Million</strong> in settlements and verdicts on behalf of our clients. We understand how much financial stress a commercial truck accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'truck' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2018/07/top10-trucking-e1532368967565.png";
                newPara = "A negligent truck driver is the most dangerous hazard a driver can face. Weighing up to 30 times more than a passenger car, a trucking accident can cause serious damage and injury to those involved. You shouldn't have to pay expensive medical bills because of a negligent truck driver. Our team of truck accident attorneys will fight to get you the compensation you deserve for your medical bills, lost wages, repairs costs, pain and suffering. Our firm has won hundreds of millions in settlement and verdicts for our clients. We understand how much financial stress a truck accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'bus' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/Top1percent_badge_bus_250x250_transparent.png";
                newPara = "There are around 24,000 people injured in bus accidents per year. These accidents can cause great bodily harm to passengers and drivers who were struck by a bus. Treating such injuries can be costly, especially if they are of a catastrophic nature. Wilshire Law Firm's bus accident lawyers will fight aggressively to recover the maximum compensation you deserve. Our bus accident lawyers are ranked as the top 1% of lawyers, nationwide, and we have recovered hundreds of million on behalf of our clients. We understand how much financial stress a bus accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'ped' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/Top1percent_badge_pedestrian_250x250_transparent.png";
                newPara = "When a driver strikes you while your walking, there's not much you can do against 2,000 lbs. of metal. In nearly all cases, the pedestrian will be the one to suffer severe injuries. You should not have to deal with expensive medical costs. Our pedestrian accident lawyers will fight on your behalf for the maximum amount of compensation. We have recovered hundreds of millions for our clients in settlements and verdicts. We understand how much financial stress a pedestrian accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'death' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2018/06/Top1percent_badge_wrongfuldeath_250x250_transparent.png";
                newPara = "The sudden loss of a loved one due to someone else's negligence or recklessness is one of the most devastating events a family can go through. Our wrongful death lawyers can help you, and your family seek justice against the people or entities responsible. While no amount of compensation can make up for the absence of a spouse, parent or child, obtaining justice and a financially secure future can help you find closure and face the future more clearly. Our wrongful death attorneys will fight hard for you at this difficult time. We understand how much financial stress the death of a loved one can put on families, which is why you don't pay for our services unless your case is won. Call us or click the button below to schedule a free consultation.";
                break;
            case 'exp' :
                newImage = "/img/MVTLA-president.png";
                newPara = "Explosion accidents can have lasting injuries, such as burns, scars, cuts, injuries to the face, eyes, and hands. Explosion accidents can also cost someone tens of thousands of dollars to treat. If you were injured due to an explosion that was not your fault, you deserve to be compensated. Wilshire Law Firm's explosion accident lawyers can help. We have helped our clients recover hundreds of millions in settlements and verdicts for their claims, and we can help you recover the maximum possible settlement. We understand how much financial stress an explosion accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'con' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/Top1percent_badge_construction_250x250_transparent.png";
                newPara = "Construction injuries can be expensive to treat, especially if they are of a catastrophic nature. There is also the loss of wages, as well as pain and suffering, that are associated with a construction injury. If you or a loved one have been injured on a construction accident site, you may be entitled to compensation. Wilshire Law Firm's construction accident lawyers are ranked as the top 1% of lawyers, nationwide, and have experience representing victims of a construction accident. Our construction accident lawyers have won hundreds of millions on behalf of our clients in settlement and verdicts. We understand how much financial stress a construction accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'fire' :
                newImage = "/img/MVTLA-president.png";
                newPara = "Burn injuries send over 75,000 people to the hospital per year. These injures leave victims scarred, disfigured, and in pain. Burn victims may require costly treatments, such as skin crafts or plastic surgery, to recover. You deserve to be compensated for pain and suffering. Wilshire Law Firm's burn injury lawyers are here to help. We will fight insurance companies on your behalf for the compensation you deserve. We have helped recover more than <strong>$400 Million</strong> for our clients in settlements and verdicts. We understand how much financial stress a fire accident can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'term' :
                newImage = "/img/MVTLA-president.png";
                newPara = "As an employee, you have the right to a safe, comfortable and fair workplace environment free from fear of wrongful termination or unfair dismissal. The passionate wrongful termination lawyers at Wilshire Law Firm are dedicated to protecting the rights of all workers throughout California. If you have any questions about your specific wrongful termination lawsuit, call us at (800) 522-7274 for a FREE consultation â€“ and let us fight for you.";
                break;
            case 'preg' :
                newImage = "/img/MVTLA-president.png";
                newPara = "Title VII of the Pregnancy Discrimination Act states that you cannot be denied a job, promotion, or be terminated because you are pregnant and that you have the &ldquo;same rights, leave privileges and other benefits, as other workers who are disabled from working.&rdquo; On a state level, the California Fair Employment and Housing Act (FEHA) reinforces this act by stating that &ldquo;it is an unlawful employment practice for any employer with one or more employees or other covered entities to harass an employee or applicant because of pregnancy or perceived pregnancy, childbirth, breastfeeding, or any related medical conditions.&rdquo; The law is clear and Wilshire Law Firm intends to uphold this law. When supervisors and human resources fail you, you need a law firm you can count on like Wilshire Law Firm. Our top pregnancy discrimination lawyers are on your side and ready to protect your rights to work without facing pregnancy discrimination. By using our employment law legal expertise, our lawyers will aggressively fight to win your case. Our pregnancy discrimination lawyers&apos; aim to provide you with maximum compensation for the damages and losses you may have suffered in the workplace. Trust us with your case like so many others before you who have seen their compensation double and even quadruple through our services, resulting in more than 170 million dollars being put into the hands of our client. Take action by calling Wilshire Law Firm today for your free case consultation!";

                break;
            case 'dis' :
                newImage = "/img/MVTLA-president.png";
                newPara = "According to the California Fair Employment and Housing Act (FEHA), employers must make reasonable accommodations and may not deny employment on the basis of having to make those reasonable accommodations.  Furthermore, under The Americans with Disabilities Act of 1991, employers and fellow employees cannot discriminate or harass those with disabilities.  And, yet, 1 in 4 people with a disability suffer from some form of discrimination. If you feel like you&apos;ve been discriminated against, then it&apos;s time to hire a Wilshire Law Firm disability discrimination lawyer! With over 70 professionals working for Wilshire Law Firm, our team of lawyers will aggressively fight for you to be compensated a generous amount for the loss and damages you have sustained because of disability discrimination practices. Our firm has a proven record of not only fighting, but winning as well! So far, we have put more than 170 million dollars into the hands of our clients. Seek justice against companies that have used discriminatory practices against you by bringing your case to one of our disability discrimination lawyers. Wilshire Law Firm offers a free case consultation, so you have nothing to lose by calling us today!";
                newPhrase = "Recieve justice against your employer<br> without paying anything out of pocket.";
                offering = "<ul><div class='col-md-6'><li style='text-align:center'><span style='font-size:17px'>Recovery of Unpaid Wages and/or Overtime</li><li  style='text-align:center'><span style='font-size:17px'>Maximum Compensation for Your Employment Case</span></li></div><div class='col-md-6'><li  style='text-align:center'><span style='font-size:17px'>Proven Results</span></li><li  style='text-align:center'><span style='font-size:17px'>No Recovery, No fee</span></li></div></ul>";

                break;
            case 'race' :
                newImage = "/img/MVTLA-president.png";
                newPara = "Federally, Title VII of the Civil Rights Act of 1964 protects employees from being racially discriminated against. California&apos;s Fair Employment and Housing Act solidifies this stand by making it unlawful &ldquo;for any person to discriminate against any person in the selection, termination, training or other terms or treatment of that personâ€¦because of race.&rdquo;  These laws prevent companies from treating employees differently because of their race or implementing workplace practices that have a negative impact on certain races.  Common examples of racial discrimination include lower rages, failure to provide benefits, unnecessarily disciplining or even firing employees, or implementing policies that hair be styled a certain way. If you feel like your workplace has racially discriminated against you, then it&apos;s time to hire a race discrimination lawyer from Wilshire Law Firm! Wilshire Law Firm&apos;s racial discrimination lawyers have one goal: to help you seek justice against companies that have wronged you through discriminatory practices. We have proven time and time against that our techniques work and have won our clients more than 170 million dollars in compensation! Companies believe that their discriminatory practices will go unchallenged but our racial discrimination lawyers will show them otherwise. By bringing your case to us, you&apos;re not only seeking justice for yourself, but helping to prevent employers from discriminating against others. For a free consultation on your case, call Wilshire Law Firm.";
                break;
            case 'age' :
                newImage = "/img/MVTLA-president.png";
                newPara = "Federally, both the Age Discrimination in Employment Act of 1967 and the Older Workers Benefit Protection Act prohibit employers from discriminating against you because of your age. On the state level, California&apos;s Fair Employment and Housing Act (FEHA) protects those over the age of 40 from discriminatory practices. But, 64 percent of workers say that they have either seen or faced age discrimination in the workplace. It is never acceptable for the workplace to do any of the following due to your age: treat you differently, harass you, or terminate you. If you believe that you have been subjected to age discrimination, you need to hire an age discrimination lawyer from Wilshire Law Firm. When human resources and employers fail you, you need someone you can trust with your case. Our age discrimination lawyers will not only take your complaints seriously, but have the legal expertise and the know-how to fight for you. With over 70 professionals working for Wilshire Law Firm, you can feel confident that your case is in good hands! We&apos;ve proven this by winning more than 170 million dollars in compensation for our clients. It&apos;s time that companies who employ discriminatory and ageist practices be punished. Call Wilshire Law Firm today for a free consultation!";
                break;
            case 'gen' :
                newImage = "/img/MVTLA-president.png";
                newPara = "The Civil Rights Act of 1964 makes it clear that it is illegal to be discriminated against because of your race, color, religion, sex and national origin. Furthermore, according to California&apos;s Equal Pay Act, employers must pay &ldquo;employees who perform â€˜substantially similar work,&apos; when viewed as a composite of skill, effort, and responsibility&rdquo; equal pay and, yet, women earn; on average, 19 percent less than men! This is just one example of how gender discrimination is still an issue in the workplace for both men and women. If you feel like your employer or supervisor has discriminated against you because of your gender, then it&apos;s time to hire a Wilshire Law Firm gender discrimination lawyer. Wilshire Law Firm&apos;s gender discrimination lawyers aim is to help you get justice against companies that have employed discriminatory practices. We have proved time and time again that we not only win cases, but help to double and even quadruple compensation. To date, we have won more than 170 million dollars for our clients! If you feel like you were harassed, denied a job or promotion, paid lower wages, or faced other discriminatory actions from your workplace because of your gender, call today to schedule a free consultation with one of Wilshire Law Firm&apos;s top gender discrimination lawyers!";
                break;
            case 'wb' :
                newImage = "/img/MVTLA-president.png";
                newPara = "California Labor codes 1102.5 and Code Section 6310, an employer cannot discharge or discriminate against an employee who has made a compliant or testified against their company for reporting company misconduct. This means that if you are a &ldquo;whistleblower,&rdquo; your company can&apos;t legally retaliate against you, nor can a company enforce rules that would prevent you from being a whistleblower. Whistleblower rights exist to help keep companies in check and those brave enough to expose a company&apos;s wrong doings shouldn&apos;t be punished for doing so. If you feel that you have been retaliated against for whistleblowing, then you need to hire a whistleblowing discrimination lawyer who can protect your rights! Our whistleblowing lawyers are prepared to aggressively fight not only to protect your whistleblowing rights, but that you&apos;re compensated for losses or damages you may have sustained as a result of retaliation. Wilshire Law Firm&apos;s legal methods work, proof being that we&apos;ve won our clients more than 170 million dollars in compensation! Retaliation for whistleblowing is never an acceptable approach a company should take against their employees. Seek justice today by calling Wilshire Law Firm for a free case consultation!";
                break;
            case 'ret' :
                newImage = "/img/MVTLA-president.png";
                newPara = "When employed at a company, you have the right to work in a hostile and harassment free environment. You also have the right, according to California Labor Code 6310, to file a formal complaint against those who create a hostile work environment without fearing retaliation. But, the Equal Employment Opportunity Commission&apos;s retaliation charges made up 45.9 percent of total charges they received in 2016. That is a startling amount considering that it is illegal for a company and its employers to retaliate against its employees. Wilshire Law Firm&apos;s retaliation lawyers are here to protect your right to file formal complaints without suffering from retaliatory actions by other employees or employers. Wilshire Law Firm strongly believes in holding those who have taken retaliatory measures against you accountable for their actions. In no way, shape, or form should you suffer further for filing a complaint. Our retaliation lawyers will use their legal know-how so that you are compensated for the damage and loss you may have experienced due to ongoing harassment. So far, we&apos;ve recovered more than 170 million dollars in compensation for our clients. Wilshire Law Firm&apos;s retaliation lawyers offer a free case consultation so you have nothing to lose by calling us today!";
                break;
            case 'ride' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2017/12/322b3ccf-top25-motor-vehicle.png";
                newPara = "In order to get the compensation that you deserve, you must work with the best Uber and Lyft accident law firm in your area. Our dedicated team of rideshare accident lawyers will fight for you against the insurance company's attempts to weaken your claim. Because of this, Wilshire Law Firm has familiarized itself with how insurance companies work and we know how to counteract their delay-and-deny tactics. It is common for us to double, triple, or even quadruple an insurance company's initial settlement offer. We have won more than <strong>$400 Million</strong> for our clients. If you want to get maximum compensation for your damages, injuries and losses, call Wilshire Law Firm today. With our team of expert rideshare accident attorneys, you will never have to settle for less than you deserve. Call now or tap the button below for a free consultation!";
                break;
            case 'spine' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2017/12/322b3ccf-top25-motor-vehicle.png";
                newPara = "If you or someone close to you suffered a spinal cord injury due to the recklessness or negligence of another person or entity, call our spinal cord injury attorneys right away. This catastrophic injury can lead to permanent paralysis and abruptly end a person's ability to earn a living. In addition, the need for expensive medical treatments and long-term care can overwhelm a victim and their family financially. Our spinal cord injury lawyers will fight to get you the compensation that you need to recover. We understand how much financial stress a spinal cord injury can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'brain' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2019/03/BrainInjury_Top25_300px.png";
                newPara = "Accident victims who suffer a brain injury may not immediately realize the extent of their injury. As a result, brain injury cases can be more complex than other types of personal injury cases. That's why it's important to enlist the services of the skilled, award-winning brain injury lawyers at Wilshire Law Firm. We have the legal expertise and resources to make sure the insurance company provides you with the maximum compensation. If you or your family have been affected by a brain injury due to an accident, call the attorneys at Wilshire Law Firm immediately. We understand how much financial stress a brain injury can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'cat' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2017/12/322b3ccf-top25-motor-vehicle.png";
                newPara = "Catastrophic injuries are life-altering injuries, such as spinal cord injuries, brain injuries, and amputations. Even minor injuries to your spine can cost an individual a substantial amount of money throughout their lifetime. Wilshire Law Firm's catastrophic attorneys are prepared to help. With our services, you'll have access to experienced legal advice. Our catastrophic injury attorneys have won more than <strong>$400 Million</strong> for our clients in settlements and verdicts! We will help you recover compensation you need and deserve for your treatments. We understand how much financial stress a catastrophic injury can put on families, which is why you don't pay for our services unless your case is won! Call us or click the button below to schedule a free consultation.";
                break;
            case 'van' :
                newImage = "https://www.wilshirelawfirm.com/wp-content/uploads/2017/12/322b3ccf-top25-motor-vehicle.png";
                break;
            default :
                newPara ="";
                newImage ="";
        }
        if (newImage !="") {
            $("#pa_badge").attr('data-src',newImage);
        }
        if (newPara !="") {
            jQuery("#paraSwap").html(newPara);
        }
    }
});
