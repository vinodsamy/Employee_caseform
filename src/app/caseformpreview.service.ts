import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseformpreviewService {
  public email_forwarded_caseform = localStorage.getItem('email_forwarded_caseform');

  constructor() { }


  getPreview(cf) {

    // const storedData: string = localStorage.getItem('current_session');
    // const cf = JSON.parse(storedData);
    console.log(cf);

    const empty = '&#9744;';
    const ticked = '&#9745;';

    let mem_genderfemale = empty;
    let mem_gendermale = empty;

    if (cf.two.personal.gender == 'man') {
        mem_gendermale = ticked;
    }
    if (cf.two.personal.gender == 'woman') {
        mem_genderfemale = ticked;
    }

    let mem_disability_y, mem_disability_n;
    mem_disability_y = mem_disability_n = empty;
    switch (cf.two.personal.have_disability) {
      case 'y' :             mem_disability_y = ticked;             break;
      case 'n' :             mem_disability_n = ticked;             break;
    }
    let e1,  e2,  e3,  e4,  e5,  e6,  e7,  e8,  e9,  e10,  e11,  e12,  e13;
    e1 = e2 = e3 = e4 = e5 = e6 = e7 = e8 = e9 = e10 = e11 = e12 = e13 = empty;
    switch (cf.two.personal.ethnic_origin) {
      case 'a' :
        e1 = ticked;
        break;
      case 'b' :
        e2 = ticked;
        break;
      case 'c' :
        e3 = ticked;
        break;
      case 'd' :
        e4 = ticked;
        break;
      case 'e' :
        e5 = ticked;
        break;
      case 'f' :
        e6 = ticked;
        break;
      case 'g' :
        e7 = ticked;
        break;
      case 'h' :
        e8 = ticked;
        break;
      case 'i' :
        e9 = ticked;
        break;
      case 'l' :
        e10 = ticked;
        break;
      case 'm' :
        e11 = ticked;
        break;
      case 'n' :
        e12 = ticked;
        break;
      case 'o' :
        e13 = ticked;
        break;
    }


    let t1,  t2,  t3,  t4,  t5,  t6,  t7;
    t1 = t2 = t3 = t4 = t5 = t6 = t7 = empty;
    switch (cf.three.general.type) {
      case 'a' :             t1 = ticked;             break;
      case 'b' :             t2 = ticked;             break;
      case 'c' :              t3 = ticked;             break;
      case 'd' :           t4 = ticked;             break;
      case 'e' :             t5 = ticked;             break;
      case 'f' :             t6 = ticked;             break;
      case 'g' :              t7 = ticked;             break;
    }

    let adults1, adults2;
    adults1 = adults2 = empty;
    switch (cf.two.disclosure_barring.adults_list) {
      case 'yes' :             adults1 = ticked;             break;
      case 'no' :             adults2 = ticked;             break;
    }

    let childs1, childs2;
    childs1 = childs2 = empty;
    switch (cf.two.disclosure_barring.children_list) {
      case 'yes' :             childs1 = ticked;             break;
      case 'no' :             childs2 = ticked;             break;
    }

    let similar1, similar2;
    similar1 = similar2 = empty;
    switch (cf.four.similar_claim.is_present) {
      case 'yes' :             similar1 = ticked;             break;
      case 'no' :             similar2 = ticked;             break;
    }

    let actions1, actions2;
    actions1 = actions2 = empty;
    switch(cf.four.other_actions.anyone_else) {
        case 'yes' :             actions1 = ticked;             break;
        case 'no' :             actions2 = ticked;             break;
    }

    let cert1, cert2;
    cert1 = cert2 = empty;
    switch (cf.four.other_actions.certificate) {
        case 'yes' :             cert1 = ticked;             break;
        case 'no' :             cert2 = ticked;             break;
    }

    let acas1, acas2;
    acas1 = acas2 = empty;
    switch (cf.four.other_actions.acas) {
        case 'yes' :             acas1 = ticked;             break;
        case 'no' :             acas2 = ticked;             break;
    }
    const today = new Date();
    let day: string, month: string;
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
        day = '0' + dd;
    } else {
        day = '' + dd;
    }
    if (mm < 10) {
        month = '0' + mm;
    } else {
        month = '' + mm;
    }
    const signature1 = localStorage.getItem('signature1');
    const signature2 = localStorage.getItem('signature2');
    // tslint:disable-next-line:max-line-length
    const organizedgroups_address3 = cf.two.self_organized_groups.address3 + ' - ' + cf.two.self_organized_groups.city + ' - ' + cf.two.self_organized_groups.county;
    const date_today = day + '/' + month + '/' + yyyy;

    localStorage.setItem('date_today', date_today);

    function getHumanReadableDate(dateData) {
        if (dateData != '') {
            let dateObject, dateReadable;
            dateObject = new Date(Date.parse(dateData));

            dateReadable = dateObject.toDateString();
            return dateReadable;
        } else {
            return ' ';
        }
    }


    cf.one.case.date_incident = getHumanReadableDate(cf.one.case.date_incident);
    cf.one.case.date_hearing1 = getHumanReadableDate(cf.one.case.date_hearing1);
    cf.one.job.commenced = getHumanReadableDate(cf.one.job.commenced);

    cf.two.personal.joined = getHumanReadableDate(cf.two.personal.joined);
    cf.two.personal.dob = getHumanReadableDate(cf.two.personal.dob);

    cf.three.general.ended = getHumanReadableDate(cf.three.general.ended);

    cf.four.general.date_hearing2 = getHumanReadableDate(cf.four.general.date_hearing2);
    cf.four.general.date_meeting1 = getHumanReadableDate(cf.four.general.date_meeting1);
    cf.four.general.date_meeting2 = getHumanReadableDate(cf.four.general.date_meeting2);

    cf.four.other_actions.acas_date = getHumanReadableDate(cf.four.other_actions.acas_date);
    cf.four.other_actions.certificate_date = getHumanReadableDate(cf.four.other_actions.certificate_date);


    const signedCaseform = `
    <span class="c307" style="font-size:38pt !important">CASE</span><span class="c409"
        style="font-size:38pt !important">FORM</span><span class="c150">&nbsp;</span><br><br>
        <span class="c239">FOR MEMBERS, REPRESENTATIVES, BRANCHES &amp; REGIONS</span><span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px
        solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad)
        translateZ(0px); width: 289.08px; height: 61.27px;"><img alt="" src="img/caseform_preview_image2.png"
        style="width: 289.08px; height: 61.27px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad)
        translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>
        <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px
        solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad)
            translateZ(0px); width: 158.62px; height: 80.74px;">
            <img alt="" src="img/caseform_preview_image1.jpg" style="width: 158.62px; height: 80.74px;
            margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px);
            -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>

    <a id="t.8b41aa0f9698e16804a7fd65d068eeeb8f9f4623"></a>
    <a id="t.0"></a>
    <table class="">
        <tbody>
            <tr class="c19">
                <td class="c364" colspan="1" rowspan="1">
                    <h2 class="c0 c13"><span class="c447">FOR REGIONAL OFFICE USE ONLY</span></h2>
                    <a id="id.gjdgxs"></a>
                    <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c189"><span class="c99">Notes to help you complete this form</span></p>
    <p class="c217 c333"><span class="c6">Please read the notes overleaf before completing the Case Form. Answering all of the questions now will ensure that the UNISON representative has enough information to advise and assist, and will avoid any delays. The completed Case Form will also help UNISON monitor casework support to members and if need be, decide if there is a legal claim. </span></p>
    <p class="c45 c266"><span class="c6">Sections of the form need to be completed by either the member or the representative assisting the member. Other sections must be completed by the representative, and by a senior branch officer or the branch secretary. </span></p>
    <p class="c346 c266"><span class="c6">If assistance is needed from an organiser, it is essential that all sections of the Case Form have been completed before it is forwarded to the regional office.</span></p>
    <p class="c233"><span class="c55">A Conditions for providing assistance</span></p>
    <p class="c52 c61"><span class="c6">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNISON seeks to ensure that members are provided with the best possible advice and assistance to achieve a satisfactory outcome to matters of grievance and discipline. UNISON will determine the most appropriate representative for your case. This may mean reallocating the case at a later stage and you will be informed of any such decision. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNISON representatives and members are expected under UNISON rules to treat one another with respect. Failure to do so by a UNISON representative will entitle you to make a complaint in accordance with UNISON&rsquo;s Complaints Procedure: http://www.unison.org.uk/upload/sharepoint/ Policies/COMPLAINTS_PROCEDURE.pdf. Failure by you to treat your representative with respect may lead to support being withdrawn from you. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At all times, action taken on your behalf will be on the basis of agreement reached between you and your representative about the best way UNISON can assist you. Throughout the procedure you will be kept informed and no decision will be made without first consulting you. Should you decide at any point not to accept the advice of your UNISON representative then you are free to proceed without UNISON assistance. Please inform UNISON if you no longer require UNISON&rsquo;s assistance in these circumstances. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Legal Services Agreement must be signed if a potential legal claim is identified. UNISON supports claims to an Employment Tribunal, where a legal claim has been assessed by our solicitors as having reasonable prospects of success. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Until UNISON or its solicitors confirms in writing that it is acting for you in a legal claim, any responsibility for lodging a claim in an Employment Tribunal or Court (including County Courts, Sheriff Courts and appeal Courts) is yours alone. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNISON representation is provided on the understanding that UNISON is your sole representative. UNISON cannot be held responsible for any costs or expense incurred if you have opted out from UNISON assistance or if UNISON representation has been withdrawn. Nor will UNISON be responsible for providing assistance in respect of any appeal or higher level hearing against a decision arising from representations made after you have opted out from UNISON assistance or after UNISON assistance has been withdrawn. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You are expected to cooperate with your representative by being honest and frank about any allegation against you and in respect of any grievance you have. Your representative can only assist you if they are in possession of the full facts. Failure to cooperate can lead to UNISON support being withdrawn. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must notify your representative immediately if your circumstances change or if any new information comes to light regarding your case. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must ensure that your personal and financial information is accurate and up to date at the time that you apply for assistance. You must also confirm that your UNISON subscriptions are up to date. If you have given information which is misleading UNISON has the right to withdraw support. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">10. In the event of UNISON support being withdrawn you have the right to appeal to your branch secretary in the first instance unless notified otherwise. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">11. You must remain a member of UNISON throughout any period during which UNISON is providing advice and assistance to you. This means that if you are unemployed by reason of dismissal or redundancy you must pay a UNISON subscription at the Unemployed Member&rsquo;s rate; if you gain new employment within or outside of the areas of UNISON organisation you must maintain a UNISON subscription according to your earnings band as set out in Schedule A of the UNISON Rule book. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">12. UNISON reserves the right to use the details of your case and outcome in publicity, case study or learning materials, subject to your name only being used with your permission. </span></p>
    <p class="c233"><span class="c55">B For the member </span></p>
    <p class="c52 c61"><span class="c6">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In all cases you must complete sections 1-14. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is essential that all these sections are completed. All the information requested should be readily known to you, or is shown on your pay slip. If you have any difficulty in answering any of the questions, your UNISON representative should be able to assist you. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 4</span><span class="c6">&nbsp;If you have a disability which may impact on the way in which a UNISON representative would assist you, and you can identify specific needs (for example palantype, large print, or mobility needs for meetings) please indicate. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 5</span><span class="c6">&nbsp;If you identify with UNISON&rsquo;s self-organisation and have a colleague who you would like to accompany you to meetings with your UNISON representative or with the employer, please give details. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 6 must be completed.</span><span class="c6">&nbsp;If an Employment Tribunal claim needs to be made you are required to provide this information on the form. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Sections 7 - 8 </span><span class="c6">should only be completed if they are relevant to your case. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 12</span><span class="c6">&nbsp;complete this section if you have received representation outside of UNISON or you have triggered the ACAS Early Conciliation procedure. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 13 The Legal Services Agreement</span><span class="c6">&nbsp;Please read </span><span class="c94">Section</span><span class="c6">&nbsp;</span><span class="c94">A Conditions for providing assistance</span><span class="c6">&nbsp;before signing this section. You should only sign this section if you agree to all the terms. You should hand the original to your representative and ask that you be given a copy. You should keep this in a safe place for future reference. It is a binding agreement between you and UNISON. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">9. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c263">Section 14 Declarations</span><span class="c6">&nbsp;Please sign if you agree to all the terms in this agreement between you and UNISON. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">10. </span><span class="c263">When you have completed the form</span><span class="c6">&nbsp;give it to your UNISON workplace representative. If there is no UNISON representative at your workplace, send the form to your branch secretary. UNISONdirect will give you the name and address of your branch secretary &ndash; phone 0800 0 857 857. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">11. </span><span class="c263">Please note the Conditions for providing assistance at A above.</span><span class="c6">&nbsp;You should only sign the declaration in section 14 if you agree to all of these conditions. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">12. Please make a copy of the CASE form for your records or ask your workplace representative to make a copy for you. </span></p>
    <p class="c139 c40"><span class="c127"></span></p>
    <p class="c233"><span class="c55">C For the workplace representative &nbsp;</span></p>
    <p class="c52 c61"><span class="c6">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ensure that the member has completed all relevant sections 1-14, assisting the member where necessary &ndash; if needed, you can contact the Member Records staff at your branch or regional office for information. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explain to the member that any financial information will be treated confidentially and will be necessary if an Employment Tribunal claim has been assessed as having reasonable prospects of success. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition, you must complete sections 15-17. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If more than one member is involved, all members will need to complete relevant section 1-14 of a Case Form and you should note on each form the name and workplace of the other members who have a similar claim. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If the completed form has been forwarded to you, then please enter your contact details in the box on the tear&ndash;off slip at the back and return that section of the form to the member without delay. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you should need to refer the case to a more experienced UNISON representative or your branch secretary, please ensure you forward this Case Form, with copies of all documents and correspondance, and a summary of the actions you have taken. <br></span></p>
    <p class="c217"><span class="c55">D For the branch secretary</span></p>
    <p class="c40 c45"><span class="c6"></span></p>
    <a id="id.30j0zll"></a>
    <a id="id.1fob9te"></a>
    <p class="c52 c61"><span class="c6">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If this form has come to you because the member has no workplace representative, please allocate a representative and enter that representative&rsquo;s name and contact details on the tear-off slip at the back of the form, and return that section to the member without delay. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you are seeking assistance from the region, please ensure that all sections of this form are completed and sent to the regional office together with copies of any documents and correspondance which could assist &ndash; an incomplete form is likely to be returned to you, causing unnecessary delay in the member&rsquo;s case. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You must complete sections 18-22. If there is no workplace representative please also complete sections 15-17. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you think this case may involve an application to an Employment Tribunal, you must complete section 19 (the section on legal claims) and ensure that the member has signed the Legal Services Agreement in section 14 before forwarding this Case Form and relevant information to the regional office immediately. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">5. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most claims to the Employment Tribunal have to be lodged within three months less one day of the act, failure to act or incident (eg discrimination, unfair dismissal etc), or some within six months less one day (eg equal pay or redundancy pay). Before a case can be lodged, the ACAS Early Conciliation process must be triggered. This process will be triggered by organisers once the Union&rsquo;s solicitors advise a case has merit. This is because triggering the ACAS Early Conciliation process will affect the limitation deadline ie the date by which a claim must be lodged. http://www.legislation.gov.uk/ uksi/2014/254/made. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If the original time limit for bringing an Employment Tribunal claim is less than 28 days away, you must contact the organiser/ Case Unit immediately and mark the form &lsquo;Urgent assistance required&rsquo;. You must inform the member that ACAS pre-conciliation and an Employment Tribunal claim will only be lodged in exceptional circumstances. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Where a member has already triggered the ACAS Early Conciliation procedure, or lodged a claim prior to seeking help from the branch, please contact your organiser about next steps, bearing in mind that the organiser may need to obtain legal advice. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c52 c61"><span class="c6">8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please sign the form to confirm that all details on the form are correct and that the member is up to date with UNISON subscriptions. </span></p>
    <p class="c36"><span class="c6"></span></p>
    <p class="c36"><span class="c6"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c10"><span class="c6"></span></p>
    <ol class="c7 lst-kix_list_2-0 start" start="1">
        <li class="c131"><span class="c49">Membership details</span></li>
    </ol>
    <a id="t.e72a9843099b4e1c6c75444c69c430f995e987d8"></a>
    <a id="t.1"></a>
    <table class="c135">
        <tbody>
            <tr class="c32">
                <td class="c406" colspan="1" rowspan="1">
                    <p class="c0"><span class="c3">Membership Number</span></p>
                </td>
                <td class="c197" colspan="1" rowspan="1">
                    <a id="id.3znysh7"></a>
                    <p class="c0"><span class="c8">${cf.one.memid}</span></p>
                </td>

                <td class="c86" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c264" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Please give the date you joined UNISON</span></p>
            </td>
            <td class="c466" colspan="1" rowspan="1">
                <a id="id.2et92p0"></a>
                <p class="c0"><span class="c8">${cf.two.personal.joined}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="2">
    <li class="c28"><span class="c49">Member&rsquo;s correspondance details</span></li>
    </ol>
    <a id="t.7d9b00aad4d12b62b4bc966a91e7a7801f906e3f"></a>
    <a id="t.2"></a>
    <table class="c301">
    <tbody>
        <tr class="c19">
            <td class="c59" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Title</span></p>
                <a id="id.1t3h5sf"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
                <p class="c0"><span class="c8">${cf.two.correspondance.title}</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c181" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">First Name</span></p>
                <a id="id.1t3h5sf"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
                <p class="c0"><span class="c8">${cf.two.correspondance.forename}</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c158" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Initial(s)</span></p>
                <a id="id.1t3h5sf"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
                <p class="c0"><span class="c8">${cf.two.correspondance.initial}</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c274" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Surname</span></p>
                <a id="id.4d34og8"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
                <p class="c0"><span class="c8">${cf.two.correspondance.surname}</span></p>
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c129" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.2s8eyo1"></a>
                <p class="c0"><span class="c8">${cf.two.correspondance.address1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c129" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.17dp8vu"></a>
                <p class="c0"><span class="c8">${cf.two.correspondance.address2}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c129" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Town/City</span></p>
                <a id="id.3rdcrjn"></a>
                <p class="c0"><span class="c8">${cf.two.correspondance.city}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c390" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">County</span></p>
                <a id="id.26in1rg"></a>
                <p class="c0"><span class="c8">${cf.two.correspondance.county}</span></p>
            </td>
            <td class="c110" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.lnxbz9"></a>
                <p class="c0"><span class="c8">${cf.two.correspondance.postcode}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="3">
    <li class="c28"><span class="c49">Member contact details</span></li>
    </ol>
    <a id="t.0b68be253f05fae707098ccda38fc94f21d18a95"></a>
    <a id="t.3"></a>
    <table class="c397">
    <tbody>
        <tr class="c19">
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Home telephone number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <a id="id.35nkun2"></a>
                <p class="c0"><span class="c8">${cf.two.contact.home_phone}</span></p>
            </td>
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Work telephone number</span></p>
                <a id="id.1ksv4uv"></a>
                <p class="c0"><span class="c8">${cf.two.contact.work_phone}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Mobile telephone number</span></p>
                <a id="id.44sinio"></a>
                <p class="c0"><span class="c8">${cf.two.contact.mobile_phone}</span></p>
            </td>
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Work extension number</span></p>
                <a id="id.2jxsxqh"></a>
                <p class="c0"><span class="c8">${cf.two.contact.work_extension}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Home email address</span></p>
                <a id="id.z337ya"></a>
                <p class="c0"><span class="c8">${cf.two.contact.home_email}</span></p>
            </td>
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Work email address</span></p>
                <a id="id.3j2qqm3"></a>
                <p class="c0"><span class="c8">${cf.two.contact.work_email}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c122" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Voice/Text number</span></p>
                <a id="id.1y810tw"></a>
                <p class="c0"><span class="c8">${cf.two.contact.voice_text_number}</span></p>
            </td>
            <td class="c470" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c8"></span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="4">
    <li class="c28"><span class="c49">Member personal details</span></li>
    </ol>
    <a id="t.751b64bac2519ee26ead09ba15d5826d626763ba"></a>
    <a id="t.4"></a>
    <table class="c96">
    <tbody>
        <tr class="c21">
            <td class="c342" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Date of birth </span></p>
            </td>
            <td class="c426" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">National Insurance Number </span></p>
            </td>
            <td class="c479" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Gender </span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c152" colspan="3" rowspan="1">
                <a id="id.4i7ojhp"></a>
                <p class="c0"><span class="c8">${cf.two.personal.dob}</span></p>
            </td>
            <td class="c460" colspan="3" rowspan="1">
                <a id="id.2xcytpi"></a>
                <p class="c0"><span class="c8">${cf.two.personal.nino}</span></p>
            </td>
            <td class="c100" colspan="2" rowspan="1">
                <p class="c250"><span class="c3">Male </span>
                    <a id="id.1ci93xb"></a><span class="c3">${mem_gendermale} &nbsp; &nbsp;Female </span>
                    <a id="id.3whwml4"></a><span class="c107">${mem_genderfemale}</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c401" colspan="2" rowspan="1">
                <p class="c235"><span class="c3">Do you have a disability?</span></p>
            </td>
            <td class="c452" colspan="6" rowspan="1">
                <p class="c0"><span class="c3">Please state any access needs</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c457" colspan="2" rowspan="1">
                <p class="c65"><span class="c6">Yes</span><span class="c3">&nbsp;</span>
                    <a id="id.2bn6wsx"></a><span class="c3">${mem_disability_y} &nbsp; &nbsp; </span><span class="c6">No</span><span class="c3">&nbsp;</span>
                    <a id="id.qsh70q"></a><span class="c107">${mem_disability_n}</span></p>
            </td>
            <td class="c151" colspan="6" rowspan="1">
                <a id="id.3as4poj"></a>

                <p class="c0"><span class="c8">${cf.two.personal.any_needs}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c73" colspan="8" rowspan="1">
                <p class="c363"><span class="c393">Ethnic origin </span><span class="c420">(please tick one box only)</span></p>
            </td>
        </tr>
        <tr class="c377">
            <td class="c186" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">Bangladeshi </span>
                    <a id="id.1pxezwc"></a><span class="c8">${e1}</span></p>
            </td>
            <td class="c108" colspan="3" rowspan="1">
                <p class="c1"><span class="c3">Chinese </span>
                    <a id="id.49x2ik5"></a><span class="c8">${e2}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">Indian </span>
                    <a id="id.2p2csry"></a><span class="c8">${e3}</span></p>
            </td>
            <td class="c119" colspan="2" rowspan="1">
                <p class="c1"><span class="c3">Pakistani </span>
                    <a id="id.147n2zr"></a><span class="c8">${e4}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c186" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">Asian UK </span>
                    <a id="id.3o7alnk"></a><span class="c8">${e5}</span></p>
            </td>
            <td class="c108" colspan="3" rowspan="1">
                <p class="c1"><span class="c3">Asian other </span>
                    <a id="id.23ckvvd"></a><span class="c8">${e6}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1 c40"><span class="c3"></span></p>
            </td>
            <td class="c236" colspan="3" rowspan="1">
                <p class="c1 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c186" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">Black African </span>
                    <a id="id.ihv636"></a><span class="c8">${e7}</span></p>
            </td>
            <td class="c108" colspan="3" rowspan="1">
                <p class="c1"><span class="c3">Black Caribbean </span>
                    <a id="id.32hioqz"></a><span class="c8">${e8}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">Black UK </span>
                    <a id="id.1hmsyys"></a><span class="c8">${e9}</span></p>
            </td>
            <td class="c119" colspan="2" rowspan="1">
                <p class="c1"><span class="c3">Black other </span>
                    <a id="id.41mghml"></a><span class="c8">${e10}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c186" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">White UK </span>
                    <a id="id.2grqrue"></a><span class="c8">${e11}</span></p>
            </td>
            <td class="c108" colspan="3" rowspan="1">
                <p class="c1"><span class="c3">Irish </span>
                    <a id="id.vx1227"></a><span class="c8">${e12}</span></p>
            </td>
            <td class="c119" colspan="1" rowspan="1">
                <p class="c1"><span class="c3">White other </span>
                    <a id="id.3fwokq0"></a><span class="c8">${e13}</span></p>
            </td>
            <td class="c236" colspan="3" rowspan="1">
                <p class="c1 c40"><span class="c3"></span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c6"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c10"><span class="c6"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="5">
    <li class="c131"><span class="c49">For members of self-organised groups <br>&ndash; details of any SOG officer supporting you</span></li>
    </ol>
    <a id="t.a2e9269977246e6b50e0e1e3e49820afa3a13cc1"></a>
    <a id="t.5"></a>
    <table class="c163">
    <tbody>
        <tr class="c19">
            <td class="c97" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Title</span></p>
                <a id="id.1v1yuxt"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.title}</span></p>
            </td>
            <td class="c246" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">First Name</span></p>
                <a id="id.4f1mdlm"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.forename}</span></p>
            </td>
            <td class="c334" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Initial(s)</span></p>
                <a id="id.2u6wntf"></a>
                <p class="c0"><span class="c3">${cf.two.self_organized_groups.initial}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c469" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Surname</span></p>
                <a id="id.19c6y18"></a>
                <p class="c0"><span class="c3">${cf.two.self_organized_groups.surname}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c215" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.3tbugp1"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.address1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c215" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.28h4qwu"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.address2}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c215" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Address 3</span></p>
                <a id="id.nmf14n"></a>
                <p class="c0"><span class="c8">${organizedgroups_address3}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c193" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.37m2jsg"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.postcode}</span></p>
            </td>
            <td class="c407" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Contact telephone</span></p>
                <a id="id.1mrcu09"></a>
                <p class="c0"><span class="c8">${cf.two.self_organized_groups.contact_phone}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="6">
    <li class="c131"><span class="c49">Member employment details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
    </ol>
    <a id="t.762663ffef1cf27c521fae95ce5da75bf1a8c639"></a>
    <a id="t.6"></a>
    <table class="c301">
    <tbody>
        <tr class="c31">
            <td class="c56" colspan="11" rowspan="1">
                <p class="c0"><span class="c3">Job title/occupation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <a id="id.46r0co2"></a>
                <p class="c0"><span class="c8">${cf.one.job.job_title}</span></p>
            </td>
            <td class="c360" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Payroll Number</span></p>
                <a id="id.2lwamvv"></a>
                <p class="c0"><span class="c8">${cf.three.general.payrollno}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c17" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Employment commenced</span></p>
            </td>
            <td class="c352" colspan="5" rowspan="1">
                <p class="c0"><span class="c8">${cf.one.job.commenced}</span></p>
            </td>
            <td class="c444" colspan="6" rowspan="1">
                <p class="c18"><span class="c3">Employment ended</span></p>
            </td>
            <td class="c438" colspan="3" rowspan="1">
                <p class="c0"><span class="c8">${cf.three.general.ended}</span></p>
            </td>
        </tr>
        <tr class="c162">
            <td class="c260" colspan="2" rowspan="1">
                <p class="c63"><span class="c3">Permanent </span>
                    <a id="id.111kx3o"></a><span class="c3">${t1}</span></p>
            </td>
            <td class="c256" colspan="1" rowspan="1">
                <p class="c63"><span class="c3">Temporary </span>
                    <a id="id.3l18frh"></a><span class="c3">${t2}</span></p>
            </td>
            <td class="c434" colspan="2" rowspan="1">
                <p class="c63"><span class="c3">Casual </span>
                    <a id="id.206ipza"></a><span class="c3">${t3}</span></p>
            </td>
            <td class="c195" colspan="3" rowspan="1">
                <p class="c63"><span class="c3">Fixed Term Contract </span>
                    <a id="id.4k668n3"></a><span class="c3">${t4}</span></p>
            </td>
            <td class="c290" colspan="3" rowspan="1">
                <p class="c63"><span class="c3">Full-time </span>
                    <a id="id.2zbgiuw"></a><span class="c3">${t5}</span></p>
            </td>
            <td class="c234" colspan="3" rowspan="1">
                <p class="c63"><span class="c3">Part-time </span>
                    <a id="id.1egqt2p"></a><span class="c3">${t6}</span></p>
            </td>
            <td class="c241" colspan="1" rowspan="1">
                <p class="c63"><span class="c3">Job share </span>
                    <a id="id.3ygebqi"></a><span class="c3">${t7}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c392" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Basic hours</span></p>
                <p class="c18"><span class="c3">per week </span></p>
            </td>
            <td class="c213" colspan="2" rowspan="1">
                <a id="id.2dlolyb"></a>
                <p class="c0"><span class="c8">${cf.three.monetary.h_week}</span></p>
            </td>
            <td class="c425" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Basic wage &nbsp; &nbsp;</span></p>
                <p class="c18"><span class="c3">per week</span></p>
            </td>
            <td class="c323" colspan="3" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.sqyw64"></a><span class="c8">${cf.three.monetary.wage_week}</span></p>
            </td>
            <td class="c441" colspan="1" rowspan="1">
                <p class="c250"><span class="c459">OR</span></p>
            </td>
            <td class="c159" colspan="4" rowspan="1">
                <p class="c18"><span class="c3">Basic salary </span></p>
                <p class="c18"><span class="c3">per month</span></p>
            </td>
            <td class="c93" colspan="2" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.3cqmetx"></a><span class="c8">${cf.three.monetary.salary_month}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c419" colspan="4" rowspan="1">
                <p class="c18"><span class="c3">Average take home pay per week </span></p>
            </td>
            <td class="c249" colspan="3" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.1rvwp1q"></a><span class="c8">${cf.three.monetary.pay_week}</span></p>
            </td>
            <td class="c322" colspan="6" rowspan="1">
                <p class="c18"><span class="c3">Average take home pay per month </span></p>
            </td>
            <td class="c93" colspan="2" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.4bvk7pj"></a><span class="c8">${cf.three.monetary.pay_month}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c194" colspan="4" rowspan="1">
                <p class="c18"><span class="c3">Other bonuses or benefits per week</span></p>
            </td>
            <td class="c249" colspan="3" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.2r0uhxc"></a><span class="c8">${cf.three.monetary.bonuses_week}</span></p>
            </td>
            <td class="c399" colspan="6" rowspan="1">
                <p class="c18"><span class="c3">Other bonuses or benefits per month</span></p>
            </td>
            <td class="c93" colspan="2" rowspan="1">
                <p class="c0"><span class="c8">&pound; </span>
                    <a id="id.1664s55"></a><span class="c8">${cf.three.monetary.bonuses_month}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Employer Head Office Name</span></p>
                <a id="id.3q5sasy"></a>
                <p class="c0"><span class="c8">${cf.one.employer.office_name}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.25b2l0r"></a>
                <p class="c0"><span class="c8">${cf.one.employer.address1}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.kgcv8k"></a>
                <p class="c0"><span class="c8">${cf.one.employer.address2}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c413" colspan="10" rowspan="1">
                <p class="c0"><span class="c3">Address 3 </span></p>
                <a id="id.34g0dwd"></a>
                <p class="c0"><span class="c8">${cf.one.employer.address3}</span></p>
            </td>
            <td class="c270" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.1jlao46"></a>
                <p class="c0"><span class="c8">${cf.one.employer.postcode}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c413" colspan="10" rowspan="1">
                <p class="c0"><span class="c3">Employer&#39;s Telephone Number<br></span>
                    <a id="id.43ky6rz"></a><span class="c3">${cf.one.employer.phone_number}</span></p>
            </td>
            <td class="c270" colspan="5" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Workplace Name</span></p>
                <a id="id.2iq8gzs"></a>
                <p class="c0"><span class="c8">${cf.one.workplace.workplace_name}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.xvir7l"></a>
                <p class="c0"><span class="c8">${cf.one.workplace.address1}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c171" colspan="15" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.3hv69ve"></a>
                <p class="c0"><span class="c8">${cf.one.workplace.address2}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c413" colspan="10" rowspan="1">
                <p class="c0"><span class="c3">Address 3 </span></p>
                <a id="id.1x0gk37"></a>
                <p class="c0"><span class="c3">${cf.one.workplace.address3}</span></p>
            </td>
            <td class="c270" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.4h042r0"></a>
                <p class="c0"><span class="c8">${cf.one.workplace.postcode}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c6"></span></p>
    <p class="c0 c40"><span class="c6"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="7">
    <li class="c131"><span class="c49">Fitness to practice <br></span><span class="c6">(Please complete if member has been reported to their professional body)</span></li>
    </ol>
    <a id="t.20e695ebf8a09f0acfee1fb88316319d3becfd11"></a>
    <a id="t.7"></a>
    <table class="c302">
    <tbody>
        <tr class="c31">
            <td class="c77" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Name of registration body</span></p>
                <a id="id.2w5ecyt"></a>
                <p class="c0"><span class="c8">${cf.two.fitness_to_practice.registration_body}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c77" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Professional registration PIN number</span></p>
                <a id="id.1baon6m"></a>
                <p class="c0"><span class="c8">${cf.two.fitness_to_practice.pin_number}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="8">
    <li class="c131"><span class="c49">Disclosure and Barring scheme</span></li>
    </ol>
    <a id="t.78e74545bbb9df4866cf95870a7ef2decaf0f278"></a>
    <a id="t.8"></a>
    <table class="c443">
    <tbody>
        <tr class="c21">
            <td class="c335" colspan="2" rowspan="1">
                <p class="c217"><span class="c3">Are you barred from working for either the Disclosure and Barring scheme or Disclosure Scotland?</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c147" colspan="1" rowspan="1">
                <p class="c217"><span class="c3">Barred adults list &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a id="id.3vac5uf"></a><span class="c3">${adults1} YES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a id="id.2afmg28"></a><span class="c3">${adults2} NO &nbsp;(please tick box)</span></p>
            </td>
            <td class="c369" colspan="1" rowspan="1">
                <p class="c217"><span class="c3">Barred childrens list ${childs1} YES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${childs2} NO &nbsp;(please tick box)</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="9">
    <li class="c131"><span class="c49">Case details (Please use continuation sheet if necessary)</span></li>
    </ol>
    <a id="t.c41f55b058d0bd2375b7557f6e8a110eed88b87d"></a>
    <a id="t.9"></a>
    <table class="c51">
    <tbody>
        <tr class="c31">
            <td class="c109" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Date of incident (or most recent incident) which is the subject of this case </span></p>
            </td>
            <td class="c472" colspan="1" rowspan="1">
                <a id="id.pkwqa1"></a>
                <p class="c0"><span class="c8">${cf.one.case.date_incident}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c415"></span></p>
    <a id="t.10652fb3599ab3343e9c20b39bf44ae38d86e659"></a>
    <a id="t.10"></a>
    <table class="c51">
    <tbody>
        <tr class="c325">
            <td class="c42" colspan="1" rowspan="1"> 
                <p class="c0"><span class="c3"></span></p>
                <p class="c0 c40"><span class="c8">${cf.one.case.problem}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c3"></span></p>
    <a id="t.c9ee2758684a505edc8ffd5a925b1d42b1c0305c"></a>
    <a id="t.11"></a>
    <table class="c135">
    <tbody>
        <tr class="c21">
            <td class="c456" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Date(s) of forthcoming hearing(s) </span></p>
            </td>
            <td class="c188" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Type of hearing</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c62" colspan="1" rowspan="1">
                <a id="id.1opuj5n"></a>
                <p class="c0"><span class="c8">${cf.one.case.date_hearing1}</span></p>
            </td>
            <td class="c157" colspan="1" rowspan="1">
                <p class="c45 c40 c430"><span class="c3"></span></p>
            </td>
            <td class="c111" colspan="1" rowspan="1">
                <a id="id.48pi1tg"></a>
                <p class="c0"><span class="c8">${cf.four.general.type_hearing1}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c62" colspan="1" rowspan="1">
                <a id="id.2nusc19"></a>
                <p class="c0"><span class="c8">${cf.four.general.date_hearing2}</span></p>
            </td>
            <td class="c157" colspan="1" rowspan="1">
                <p class="c45 c430 c40"><span class="c3"></span></p>
            </td>
            <td class="c111" colspan="1" rowspan="1">
                <a id="id.1302m92"></a>
                <p class="c0"><span class="c8">${cf.four.general.type_hearing2}</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c428" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Date(s) of forthcoming meeting(s)</span></p>
            </td>
            <td class="c378" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Type of meeting</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c62" colspan="1" rowspan="1">
                <p class="c0"><span class="c8">${cf.four.general.date_meeting1}</span></p>
            </td>
            <td class="c157" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c111" colspan="1" rowspan="1">
                <p class="c0"><span class="c8">${cf.four.general.type_meeting1}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c62" colspan="1" rowspan="1">
                <p class="c0"><span class="c8">${cf.four.general.date_meeting2}</span></p>
            </td>
            <td class="c157" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c111" colspan="1" rowspan="1">
                <a id="id.3mzq4wv"></a>
                <p class="c0"><span class="c375">${cf.four.general.type_meeting2}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c3"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="10">
    <li class="c28"><span class="c49">Is there anyone else with a similar claim?</span></li>
    </ol>
    <a id="t.8513785c09b3d4cb5416d92d428b44a4a3b9a227"></a>
    <a id="t.12"></a>
    <table class="c297">
    <tbody>
        <tr class="c31">
            <td class="c358" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Is there anyone else with a similar claim?</span></p>
            </td>
            <td class="c414" colspan="4" rowspan="1">
                <a id="id.2250f4o"></a>
                <p class="c0"><span>${similar1} YES* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a id="id.haapch"></a><span class="c6">${similar2} NO &nbsp;(please tick box)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c423" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Check with other colleagues in the department or your workplace represenative to see if anyone else has a similar claim<br></span></p>
                <p class="c0"><span class="c3">*If Yes, please state the name of the other person or persons and their workplace address</span></p>
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c133" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Title</span></p>
                <a id="id.319y80a"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.title1}</span></p>
            </td>
            <td class="c296" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">First Name</span></p>
                <a id="id.1gf8i83"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.forename1}</span></p>
            </td>
            <td class="c210" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Initial(s)</span></p>
                <a id="id.40ew0vw"></a>
                <p class="c0"><span class="c3">${cf.four.similar_claim.initial1}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c43" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Surname</span></p>
                <a id="id.2fk6b3p"></a>
                <p class="c0"><span class="c3">${cf.four.similar_claim.surname1}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c289" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.upglbi"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.address1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c289" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.3ep43zb"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.city1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c289" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 3</span></p>
                <a id="id.1tuee74"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.county1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c169" colspan="8" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.4du1wux"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.postcode1}</span></p>
            </td>
            <td class="c43" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Contact telephone</span></p>
                <a id="id.2szc72q"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.contact_phone1}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c145" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Title</span></p>
                <a id="id.184mhaj"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.title2}</span></p>
            </td>
            <td class="c336" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">First Name</span></p>
                <a id="id.3s49zyc"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.forename2}</span></p>
            </td>
            <td class="c187" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Initial(s)</span></p>
                <a id="id.279ka65"></a>
                <p class="c0"><span class="c3">${cf.four.similar_claim.initial2}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
            </td>
            <td class="c453" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Surname</span></p>
                <a id="id.meukdy"></a>
                <p class="c0"><span class="c3">${cf.four.similar_claim.surname2}</span><span class="c8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c289" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.36ei31r"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.address2}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c289" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.1ljsd9k"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.city2}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c248" colspan="9" rowspan="1">
                <p class="c0"><span class="c3">Address 3</span></p>
                <a id="id.45jfvxd"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.county2}</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c143" colspan="6" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.2koq656"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.postcode2}</span></p>
            </td>
            <td class="c54" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Contact telephone</span></p>
                <a id="id.zu0gcz"></a>
                <p class="c0"><span class="c8">${cf.four.similar_claim.contact_phone2}</span></p>
                <p class="c0 c40"><span class="c8"></span></p>
                <p class="c0 c40"><span class="c8"></span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c3"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c10"><span class="c3"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="11">
    <li class="c131"><span class="c49">What would be a solution to your problem?</span><span class="c142">&nbsp;<br></span><span class="c127">please say how you want UNISON to help you</span></li>
    </ol>
    <a id="t.c3cec8d57b9485cf71b0085fc52bde369bed8bcd"></a>
    <a id="t.13"></a>
    <table class="c273">
    <tbody>
        <tr class="c229">
            <td class="c204" colspan="1" rowspan="1">
                <a id="id.3jtnz0s"></a>
                <p class="c0"><span class="c8">${cf.one.case.solution}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="12">
    <li class="c131"><span class="c49">Other actions? &nbsp;</span></li>
    </ol>
    <a id="t.a1fee7855e5326e31f7fd34ec3091ba653a819f1"></a>
    <a id="t.14"></a>
    <table class="c280">
    <tbody>
        <tr class="c32">
            <td class="c184" colspan="3" rowspan="1">
                <p class="c63"><span class="c3">Has anyone other than UNISON advised or acted on your behalf? &nbsp;</span><span class="c6">YES*</span><span class="c3">&nbsp;</span>
                    <a id="id.1yyy98l"></a><span class="c3">${actions1} &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.4iylrwe"></a><span class="c107">${actions2}</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c386">
            <td class="c467" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">*If YES, please give name and organisation of who has advised/acted and give brief details of advice given or action(s) taken</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c300" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Name</span></p>
                <a id="id.2y3w247"></a>
                <p class="c0"><span class="c8">${cf.four.other_actions.name}</span></p>
            </td>
        </tr>
        <tr class="c344">
            <td class="c300" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Action taken</span></p>
                <a id="id.1d96cc0"></a>
                <p class="c0"><span class="c8">${cf.four.other_actions.action}</span></p>
                <p class="c0 c40"><span class="c6"></span></p>
                <p class="c0 c40"><span class="c6"></span></p>
                <p class="c40 c218"><span class="c6"></span></p>
            </td>
        </tr>
        <tr class="c465">
            <td class="c410" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">b) Have you or anyone other than UNISON triggered the ACAS Early Conciliation procedure?</span></p>
            </td>
            <td class="c418" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES**</span><span class="c3">&nbsp;</span>
                    <a id="id.3x8tuzt"></a><span class="c3">${acas1} &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.2ce457m"></a><span class="c107">${acas2} &nbsp; &nbsp; </span><span class="c3">(please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c206" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">c) **If Yes to b) when did you trigger ACAS Early Conciliation?</span></p>
            </td>
            <td class="c308" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c303" colspan="1" rowspan="1">
                <a id="id.rjefff"></a>
                <p class="c0"><span class="c6">${cf.four.other_actions.acas_date}</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c206" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">d) **If Yes to b) have you received an ACAS Early Conciliation certificate?</span></p>
            </td>
            <td class="c262" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES***</span><span class="c3">&nbsp;</span>
                    <a id="id.3bj1y38"></a><span class="c3">${cert1} &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.1qoc8b1"></a><span class="c107">${cert2} &nbsp; &nbsp; </span><span class="c3">(please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c206" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">e) ***If Yes to d) when did you receive the ACAS Early Conciliation certificate? &nbsp;</span></p>
            </td>
            <td class="c308" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c303" colspan="1" rowspan="1">
                <a id="id.4anzqyu"></a>
                <p class="c0"><span class="c6">${cf.four.other_actions.certificate_date}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="13">
    <li class="c131"><span class="c49">Legal Services Agreement</span></li>
    </ol>
    <p class="c139 c61 c40"><span class="c263"></span></p>
    <p class="c139 c61"><span class="c263">I agree: </span></p>
    <p class="c139 c318"><span class="c6">13.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That I have complied with the Union&rsquo;s Conditions of Legal Assistance and will continue to do so.</span></p>
    <p class="c139 c318"><span class="c6">13.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That I have not triggered the ACAS Early Conciliation procedure, and I understand that it is a condition of my representation that I do not trigger the ACAS Early Conciliation procedure*. </span></p>
    <p class="c139 c318"><span class="c6">13.3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I authorise UNISON to make representations on my behalf to ACAS under the Early Conciliation scheme. When UNISON triggers the ACAS Early Conciliation procedure, and ACAS call me, I will inform them that they should speak to the person from UNISON named in the letter to me from UNISON, normally my organiser*.</span></p>
    <p class="c139"><span class="c6">I acknowledge the conditions above.</span></p>
    <a id="t.3e8b63c9559e49f944962081703c33908f56e04e"></a>
    <a id="t.15"></a>
    <table class="c51">
    <tbody>
        <tr class="c5">
            <td class="c461" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Signature of member </span></p>
            </td>
            <td class="c27" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c286" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Date of member&rsquo;s signature</span></p>
            </td>
        </tr>
        <tr class="c350">
            <td class="c295" colspan="1" rowspan="1"> <img  height="40" width="100" src="${signature1}" /> 
            </td>
            <td class="c44" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c161" colspan="1" rowspan="1">
                <p class="c0"><span class="c8">${date_today}</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c52 c40"><span class="c6"></span></p>
    <p class="c52"><span class="c94">*If ACAS Early Conciliation has been triggered, the branch must contact the organiser for advice on how to proceed.</span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c0 c40"><span class="c49"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="14">
    <li class="c131"><span class="c49">Declarations</span></li>
    </ol>
    <p class="c458"><span class="c6">I confirm and agree to the conditions of assistance set out in this Case Form. I confirm I have retained a copy for my own future reference. I understand and agree specifically to the conditions of assistance in respect of the Legal Services Agreement at 13 above**. I confirm and agree that the information is a true and accurate record. I agree to this information being shared with a third party in respect of any actions in accordance with the Data Protection Act 1998. I understand that no information will be disclosed to any external marketing. I confirm my membership subscriptions are up to date. </span></p>
    <p class="c45 c430 c40"><span class="c156"></span></p>
    <a id="t.69454bd1d357d484966cd6201cf0916949012c7c"></a>
    <a id="t.16"></a>
    <table class="c51">
    <tbody>
        <tr class="c21">
            <td class="c265" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Signature of member </span></p>
            </td>
            <td class="c27" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c286" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Date of member&rsquo;s signature</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c203" colspan="2" rowspan="1"><img height="40" width="100" src="${signature2}" />
            </td>
            <td class="c44" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c161" colspan="1" rowspan="1">
                <a id="id.2pta16n"></a>
                <p class="c0"><span class="c8">${date_today}</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c316" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Signature of branch official</span><span class="c283">&nbsp;</span>
                    <a id="id.3oy7u29"></a>
                    <a id="id.14ykbeg"></a><span class="c207">(the person first handling the case)</span></p>
            </td>
            <td class="c27" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c445" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Date of branch official&rsquo;s signature</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c203" colspan="2" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c44" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c161" colspan="1" rowspan="1">
                <a id="id.243i4a2"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c75" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Name of branch official authorising form</span><span class="c283">&nbsp;</span><span class="c207">(the person first handling the case)</span></p>
            </td>
            <td class="c408" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Membership number of branch official authorising form</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c203" colspan="2" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c44" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c161" colspan="1" rowspan="1">
                <a id="id.j8sehv"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c243"><span class="c127">**13.2 and 13.3 do not apply to members in Northern Ireland. </span></p>
    <p class="c139 c40"><span class="c6"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c10"><span class="c6"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="15">
    <li class="c131"><span class="c49">Workplace representative&rsquo;s details </span><span class="c6">(i.e. person handling the case)</span></li>
    </ol>
    <a id="t.398b4cb71c9a5a2f08c68d16c75eb65883a266bb"></a>
    <a id="t.17"></a>
    <table class="c135">
    <tbody>
        <tr class="c32">
            <td class="c50" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Membership Number</span></p>
            </td>
            <td class="c477" colspan="3" rowspan="1">
                <a id="id.338fx5o"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c468" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Title</span></p>
            </td>
            <td class="c37" colspan="1" rowspan="1">
                <a id="id.1idq7dh"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c305" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">First Name </span></p>
                <a id="id.42ddq1a"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c281" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Initial(s)</span></p>
                <a id="id.2hio093"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c319" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Surname</span></p>
                <a id="id.wnyagw"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="7" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.3gnlt4p"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="7" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.1vsw3ci"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="7" rowspan="1">
                <p class="c0"><span class="c3">Town/City</span></p>
                <a id="id.4fsjm0b"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="7" rowspan="1">
                <p class="c0"><span class="c3">County</span></p>
                <a id="id.2uxtw84"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c140" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.1a346fx"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c219" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Position held in branch</span></p>
                <a id="id.3u2rp3q"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="16">
    <li class="c131"><span class="c49">Employer contact </span><span class="c6">- details of manager you have been dealing with</span></li>
    </ol>
    <a id="t.93c494341d8f1b20418425ce324f0f74532ce182"></a>
    <a id="t.18"></a>
    <table class="c304">
    <tbody>
        <tr class="c31">
            <td class="c25" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Name</span></p>
                <a id="id.2981zbj"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c25" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Job Title</span></p>
                <a id="id.odc9jc"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c25" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Address line 1</span></p>
                <a id="id.38czs75"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c25" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Address line 2</span></p>
                <a id="id.1nia2ey"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c25" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Town/City</span></p>
                <a id="id.47hxl2r"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c222" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">County</span></p>
                <a id="id.2mn7vak"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c214" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.11si5id"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c330" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Telephone Number</span></p>
                <a id="id.3ls5o66"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c230" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Email</span></p>
                <a id="id.20xfydz"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="17">
    <li class="c131"><span class="c49">Branch details</span></li>
    </ol>
    <a id="t.e1dc8bdf5ae3fd8e88e2db1f2f4dab3d9dd6791d"></a>
    <a id="t.19"></a>
    <table class="c135">
    <tbody>
        <tr class="c32">
            <td class="c417" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Branch Number/ Code</span></p>
            </td>
            <td class="c400" colspan="2" rowspan="1">
                <a id="id.4kx3h1s"></a>
                <p class="c0"><span class="c8">00000</span></p>
            </td>
            <td class="c123" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Service Group</span></p>
            </td>
            <td class="c388" colspan="1" rowspan="1">
                <a id="id.302dr9l"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Branch Name </span></p>
                <a id="id.1f7o1he"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Address 1</span></p>
                <a id="id.3z7bk57"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Address 2</span></p>
                <a id="id.2eclud0"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Town/City</span></p>
                <a id="id.thw4kt"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c201" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">County</span></p>
                <a id="id.3dhjn8m"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c140" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Postcode</span></p>
                <a id="id.1smtxgf"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c219" colspan="3" rowspan="1">
                <p class="c0"><span class="c3">Telephone Number</span></p>
                <a id="id.4cmhg48"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="18">
    <li class="c131"><span class="c49">Details of action taken</span></li>
    </ol>
    <a id="t.4410649bbf68fd7179ecbef0e7004c3f875ffc9a"></a>
    <a id="t.20"></a>
    <table class="c247">
    <tbody>
        <tr class="c478">
            <td class="c39" colspan="2" rowspan="1">
                <p class="c0"><span class="c107">If the member&rsquo;s complaint</span><span class="c3">&nbsp;is a grievance matter, please confirm whether the member&rsquo;s complaint has been put in writing to the employer. If not, please explain the reason for not doing so. Otherwise please enter the date of the letter to the employer and attach a copy to this form.</span></p>
                <a id="id.2rrrqc1"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c432" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Date of letter</span></p>
            </td>
            <td class="c92" colspan="1" rowspan="1">
                <a id="id.16x20ju"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c362">
            <td class="c39" colspan="2" rowspan="1">
                <p class="c0"><span class="c107">If the member has been disciplined by the employer</span><span class="c3">, please confirm whether the member has lodged an appeal in writing</span></p>
                <p class="c0"><span class="c3">to the employer. If not, please explain the reason for not doing so. Otherwise please enter the date of the letter to the</span></p>
                <p class="c0"><span class="c3">employer and attach a copy to this form.</span></p>
                <a id="id.3qwpj7n"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c223" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">Date of letter</span></p>
            </td>
            <td class="c92" colspan="1" rowspan="1">
                <a id="id.261ztfg"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="19">
    <li class="c131"><span class="c49">Is there a legal claim?</span></li>
    </ol>
    <a id="t.3d76ec038c43c00d0df647cdf2062b3120a53750"></a>
    <a id="t.21"></a>
    <table class="c280">
    <tbody>
        <tr class="c32">
            <td class="c184" colspan="8" rowspan="1">
                <p class="c63"><span class="c3">Is there a legal claim?</span><span class="c6">&nbsp; YES*</span><span class="c3">&nbsp;</span>
                    <a id="id.l7a3n9"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.356xmb2"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c206" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">*If Yes please give the date &nbsp;of the incident Date and tick one of the options below: </span></p>
            </td>
            <td class="c291" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c303" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c179" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Breach of contract &nbsp; </span>
                    <a id="id.1kc7wiv"></a><span class="c156">&#9744;</span></p>
            </td>
            <td class="c85" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Unlawful deduction <br>from wages &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    <a id="id.44bvf6o"></a><span class="c58">&#9744;</span></p>
            </td>
            <td class="c125" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Holiday pay &nbsp;</span>
                    <a id="id.2jh5peh"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c294" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Unfair dismissal &nbsp;</span>
                    <a id="id.ymfzma"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c179" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Redundancy &nbsp;</span>
                    <a id="id.3im3ia3"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c85" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Discrimination** &nbsp;</span>
                    <a id="id.1xrdshw"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Maternity/pregnancy &nbsp;</span>
                    <a id="id.4hr1b5p"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">TUPE &nbsp;</span>
                    <a id="id.2wwbldi"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c179" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Trade union detriment &nbsp;</span>
                    <a id="id.1c1lvlb"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c85" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Protective award &nbsp;</span>
                    <a id="id.3w19e94"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="4" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c162">
            <td class="c183" colspan="8" rowspan="1">
                <p class="c0"><span class="c3">Any other </span><span class="c207">(please state)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c454" colspan="8" rowspan="1">
                <a id="id.2b6jogx"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c40">
            <td class="c314" colspan="8" rowspan="1">
                <p class="c0"><span class="c3">**If you ticked Discrimination please state the protected characteristic:</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c64" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Age &nbsp;</span>
                    <a id="id.qbtyoq"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Disability &nbsp;</span>
                    <a id="id.3abhhcj"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Gender reassignment &nbsp;</span>
                    <a id="id.1pgrrkc"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Maternity/pregnancy </span>
                    <a id="id.49gfa85"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c64" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Race </span>
                    <a id="id.2olpkfy"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Religion or belief &nbsp;</span>
                    <a id="id.13qzunr"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Sex </span>
                    <a id="id.3nqndbk"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c125" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Sexual orientation </span>
                    <a id="id.22vxnjd"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c183" colspan="8" rowspan="1">
                <p class="c0"><span class="c3">Please provide as far as possible the exact dates of any incidents (especially discriminatory incidents) that are alleged to have occurred. (continue on a separate sheet if necessary)</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c278" colspan="5" rowspan="1">
                <a id="id.i17xr6"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c216" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c29" colspan="1" rowspan="1">
                <a id="id.320vgez"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c278" colspan="5" rowspan="1">
                <a id="id.1h65qms"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c216" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c29" colspan="1" rowspan="1">
                <a id="id.415t9al"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c278" colspan="5" rowspan="1">
                <a id="id.2gb3jie"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c216" colspan="2" rowspan="1">
                <p class="c18"><span class="c3">Date</span></p>
            </td>
            <td class="c29" colspan="1" rowspan="1">
                <a id="id.vgdtq7"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c36"><span class="c6"></span></p>
    <ol class="c7 lst-kix_list_2-0" start="20">
    <li class="c131"><span class="c49">Action taken by branch secretary and regional assistance required</span></li>
    </ol>
    <p class="c139"><span class="c6">Most claims to the Employment Tribunal have to be lodged </span><span class="c263">within three months less one day of the act, failure to act or incident</span><span class="c6">&nbsp;(eg discrimination, unfair dismissal etc), or some cases within 6 months less one day (e.g. equal pay or redundancy pay). </span></p>
    <a id="t.536f494fc271f053ab4f9f1051671992e2b0eb41"></a>
    <a id="t.22"></a>
    <table class="c51">
    <tbody>
        <tr class="c5">
            <td class="c313" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">When was the act, failure to act or incident? (please provide date)</span></p>
            </td>
            <td class="c435" colspan="1" rowspan="1">
                <a id="id.3fg1ce0"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c5">
            <td class="c313" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">When is limitation? (please provide date)</span></p>
            </td>
            <td class="c435" colspan="1" rowspan="1">
                <a id="id.1ulbmlt"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c6"></span></p>
    <a id="t.b608ee1390358dce59e80d5389134dbf04c36e8c"></a>
    <a id="t.23"></a>
    <table class="c51">
    <tbody>
        <tr class="c279">
            <td class="c258" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Have you contacted your region to determine limitation, especially if you think it might be 28 days or less away? </span></p>
            </td>
            <td class="c14" colspan="1" rowspan="1">
                <p class="c0"><span class="c6">YES</span><span class="c3">&nbsp;</span>
                    <a id="id.4ekz59m"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.2tq9fhf"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c243"><span class="c263">Do NOT wait for a grievance or disciplinary process, including any appeal procedure, to conclude. It is important to contact your organiser straight away in order to meet the limitation deadline*. Inform them IMMEDIATELY BY PHONE if you think limitation is imminent and legal advice is required.</span></p>
    <p class="c243"><span class="c127">*</span><span class="c449">&nbsp;</span><span class="c127">If the act was on 1 January 2017, for a claim with a 3-month limitation the deadline to bring a claim is 31 March 2017. For a claim with a 6-month limitation, the deadline to bring a claim is 30 June 2017.</span></p>
    <a id="t.ac2ef8242a0b314aefd2969c30b7e0986f1f17bf"></a>
    <a id="t.24"></a>
    <table class="c51">
    <tbody>
        <tr class="c173">
            <td class="c25" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Please state what action you have taken on behalf of the member what further action you think is needed; give the dates of any forthcoming meetings or hearings. Please attach copies of any relevant correspondance.</span></p>
                <a id="id.18vjpp8"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <ol class="c7 lst-kix_list_2-0" start="21">
    <li class="c131"><span class="c49">Check List</span></li>
    </ol>
    <a id="t.2d1d0f0ba99880314fdcb097dda254e2a9ff38b2"></a>
    <a id="t.25"></a>
    <table class="c51">
    <tbody>
        <tr class="c19">
            <td class="c245" colspan="3" rowspan="1">
                <p class="c52"><span class="c6">Has the member completed Section 1? </span></p>
            </td>
            <td class="c338" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES</span><span class="c3">&nbsp;</span>
                    <a id="id.3sv78d1"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.280hiku"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c245" colspan="3" rowspan="1">
                <p class="c52"><span class="c6">If a legal claim has been identified, has this been discussed with the organiser/Case Unit?</span></p>
            </td>
            <td class="c338" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES</span><span class="c3">&nbsp;</span>
                    <a id="id.n5rssn"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.375fbgg"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c245" colspan="3" rowspan="1">
                <p class="c52"><span class="c6">Have you explained the declaration?</span></p>
            </td>
            <td class="c338" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES</span><span class="c3">&nbsp;</span>
                    <a id="id.1maplo9"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.46ad4c2"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c19">
            <td class="c245" colspan="3" rowspan="1">
                <p class="c52"><span class="c6">Have you explained the Legal Services Agreement and has the member signed it?</span></p>
            </td>
            <td class="c338" colspan="2" rowspan="1">
                <p class="c0"><span class="c6">YES</span><span class="c3">&nbsp;</span>
                    <a id="id.2lfnejv"></a><span class="c3">&#9744; &nbsp; &nbsp; </span><span class="c6">NO</span><span class="c3">&nbsp;</span>
                    <a id="id.10kxoro"></a><span class="c107">&#9744;</span><span class="c3">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c104" colspan="5" rowspan="1">
                <p class="c134 c61"><span class="c6">Have you explained that if the member&rsquo;s case has reasonable prospects of success: </span></p>
                <p class="c134 c61"><span class="c6">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNISON&rsquo;s organisers from the region will trigger the Early Conciliation procedure; </span></p>
                <p class="c36"><span class="c6"></span></p>
                <p class="c52 c61"><span class="c6">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That ACAS must be notified about the dispute through their Early Conciliation service before an ET claim can be lodged; </span></p>
                <p class="c36"><span class="c6"></span></p>
                <p class="c52 c61"><span class="c6">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sought authority from the member for their organiser to speak on the member&rsquo;s behalf to ACAS; </span></p>
                <p class="c61 c134"><span class="c6">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explained and agreed with the member that when ACAS calls, the member will ask ACAS to speak instead to their organiser or the person named in the letter confirming representation to the member.</span></p>
                <p class="c267 c61"><span class="c6">YES </span>
                    <a id="id.3kkl7fh"></a><span class="c6">&#9744; &nbsp; &nbsp; NO </span>
                    <a id="id.1zpvhna"></a><span class="c263">&#9744;</span><span class="c6">&nbsp; (please tick one box)</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c104" colspan="5" rowspan="1">
                <p class="c267"><span class="c6">Are the following documents attached? </span><span class="c127">(please tick boxes)</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Contract of employment </span>
                    <a id="id.4jpj0b3"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Dismissal letter &nbsp;</span>
                    <a id="id.2yutaiw"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Appeal letter &nbsp;</span>
                    <a id="id.1e03kqp"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Grievance letter </span>
                    <a id="id.3xzr3ei"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Disciplinary procedure </span>
                    <a id="id.2d51dmb"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Redundancy procedure </span>
                    <a id="id.sabnu4"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Redeployment procedure </span>
                    <a id="id.3c9z6hx"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Grievance procedure </span>
                    <a id="id.1rf9gpq"></a><span class="c3">&#9744;</span></p>
            </td>
        </tr>
        <tr class="c32">
            <td class="c15" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Sickness absence &nbsp;</span>
                    <a id="id.4bewzdj"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c366" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">Disability discrimination policy </span>
                    <a id="id.2qk79lc"></a><span class="c3">&#9744;</span></p>
            </td>
            <td class="c436" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">ACAS Early Conciliation Certificate &nbsp; </span>
                    <a id="id.15phjt5"></a><span class="c3">&#9744;<br>(if relevant) </span></p>
            </td>
        </tr>
        <tr class="c433">
            <td class="c321" colspan="5" rowspan="1">
                <p class="c0"><span class="c3">Any other (please give details)</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c346"><span class="c6">Incomplete information will need to delays and may mean the member loses the opportunity to lodge an Employment Tribunal claim.</span></p>
    <ol class="c7 lst-kix_list_2-0" start="22">
    <li class="c131"><span class="c49">Branch secretary authorisation</span></li>
    </ol>
    <a id="t.9d3a921de03937fe10d4c673d8539558d311edd2"></a>
    <a id="t.26"></a>
    <table class="c51">
    <tbody>
        <tr class="c31">
            <td class="c177" colspan="4" rowspan="1">
                <p class="c0"><span class="c3">Name</span></p>
                <a id="id.3pp52gy"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c396" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">Signature </span></p>
            </td>
            <td class="c351" colspan="3" rowspan="1">
                <p class="c18"><span class="c3">Date of branch secretary&rsquo;s signature</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c275" colspan="2" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c44" colspan="1" rowspan="1">
                <p class="c0 c40"><span class="c3"></span></p>
            </td>
            <td class="c385" colspan="1" rowspan="1">
                <a id="id.24ufcor"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c415"></span></p>
    <a id="t.1cf3e5117c550f9cc72ec2cec94051da26cd64b4"></a>
    <a id="t.27"></a>
    <table class="c51">
    <tbody>
        <tr class="c31">
            <td class="c251 c451" colspan="1" rowspan="1">
                <p class="c18"><span class="c3">FILE NUMBER</span></p>
            </td>
            <td class="c182" colspan="1" rowspan="1">
                <a id="id.jzpmwk"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c251 c384" colspan="3" rowspan="1">
                <p class="c0"><span class="c398">FOR REGIONAL OFFICE USE ONLY</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c160" colspan="1" rowspan="1">
                <p class="c0"><span class="c128">CASE TYPE </span></p>
            </td>
            <td class="c327" colspan="2" rowspan="1">
                <a id="id.33zd5kd"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c372" colspan="1" rowspan="1">
                <p class="c0"><span class="c128">SUB TYPE</span></p>
            </td>
            <td class="c293" colspan="1" rowspan="1">
                <a id="id.1j4nfs6"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c40 c233"><span class="c99"></span></p>
    <hr style="page-break-before:always;display:none;">
    <p class="c10"><span class="c99"></span></p>
    <p class="c233"><span class="c55">To be returned to, and retained by, the member</span></p>
    <p class="c139"><span class="c6">Your case has now been referred to the UNISON representative whose name and contact details are recorded below. Assistance will be provided in accordance with UNISON&rsquo;s scheme for representing members and the conditions outlined overleaf.</span></p>
    <p class="c139"><span class="c6">If, following your initial discussions, it is agreed that the representative will act on your behalf, any action will normally be done in consultation with yourself. Your representative should keep you routinely informed of any developments, and you should note short periods of non-communication may simply mean that your representative is waiting for someone (for example an employer, a witness) to respond to a letter or message. Please respect that most lay officers are doing a voluntary job in their own time. However, if necessary, please feel free to contact your representative to avoid undue stress to yourself.</span></p>
    <p class="c139 c40"><span class="c6"></span></p>
    <a id="t.5e8d0a4a12319b989bd0ee261cdb946481cfd73a"></a>
    <a id="t.28"></a>
    <table class="c474">
    <tbody>
        <tr class="c31">
            <td class="c137" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">The name of your UNISON representative is:</span></p>
                <a id="id.434ayfz"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c21">
            <td class="c137 c251" colspan="2" rowspan="1">
                <p class="c52"><span class="c6">Contact details:</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c211" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">work tel:</span></p>
                <a id="id.2i9l8ns"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
            <td class="c164" colspan="1" rowspan="1">
                <p class="c0"><span class="c3">mobile:</span></p>
                <a id="id.xevivl"></a>
                <p class="c0"><span class="c3">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c31">
            <td class="c137" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">email:</span></p>
                <a id="id.3hej1je"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
        <tr class="c416">
            <td class="c137" colspan="2" rowspan="1">
                <p class="c0"><span class="c3">workplace address:</span></p>
                <a id="id.1wjtbr7"></a>
                <p class="c0"><span class="c8">&nbsp; &nbsp; &nbsp;</span></p>
            </td>
        </tr>
    </tbody>
    </table>
    <p class="c0 c40"><span class="c6"></span></p>
    <div>
    <p class="c0"><span class="c156">UNISON CASE FORM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15/9/17&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAGE </span></p>
    </div>
    `;
    return signedCaseform;

  }
}
