import { useParams, Link, Navigate } from 'react-router-dom'
import { Phone, ArrowLeft, ArrowRight, Calendar, BookOpen, Clock } from 'lucide-react'
import { useFormModal } from '../context/FormModalContext'
import { useEffect } from 'react'
import img85 from '../assets/images/85.jpg'
import img84 from '../assets/images/84.jpg'
import img87 from '../assets/images/87.jpg'
import img83 from '../assets/images/83.jpg'
import img82 from '../assets/images/82.jpg'
import img86 from '../assets/images/86.jpg'
import img68 from '../assets/images/68.jpg'
import img69 from '../assets/images/69.jpg'
import imgMedication from '../assets/images/medication.jpg'
import imgIncontinence from '../assets/images/incontinence.jpg'
import imgDailyActivities from '../assets/images/daily-activities.jpg'
import imgCaregiverBurnout from '../assets/images/caregiver-burnout.jpg'

const posts = {
  'home-healthcare-needed': {
    title: 'How to Know When Home Healthcare Is Needed',
    metaTitle: 'When Is In-Home Care Needed for Aging Parents?',
    metaDesc: 'Learn the early signs that in-home care may be needed for aging parents and how to respond before safety and health are at risk.',
    image: img85,
    readTime: '8 min read',
    category: 'Care Guides',
    related: [{ slug: 'after-hospital-discharge', title: 'What to Do After Hospital Discharge: A Step-by-Step Guide' }],
    sections: [
      {
        lead: `The change is rarely dramatic. It shows up in small moments that are easy to explain away at first. A parent who once moved quickly now pauses before standing. A medication bottle sits untouched longer than it should. A routine that held steady for years begins to loosen at the edges.`,
      },
      {
        body: [
          `Individually, these shifts don't always feel urgent. Taken together, they often point to something more significant: the quiet transition from independence to needing support.`,
          `Understanding when that shift is happening—and what to do about it—can shape what comes next in a very real way.`,
        ],
      },
      {
        heading: 'What Are the Early Signs That In-Home Care May Be Needed?',
        body: [
          `Early signs of needing in-home care often appear as small disruptions in routine, safety, or health management. These changes are usually gradual, which is why they're easy to overlook until they begin to compound.`,
          `One of the first areas affected is consistency. Medications are taken at different times each day, or occasionally missed altogether. Meals become simpler or skipped. Appointments are forgotten, then rescheduled, then missed again.`,
          `Mobility is another early indicator. You might notice hesitation where there used to be ease—getting out of a chair, stepping into the shower, walking across a room. These aren't always dramatic struggles. Often, they're subtle adjustments the person makes to compensate.`,
          `Personal care can shift quietly as well. Clothing may be worn longer than usual. Grooming becomes less frequent. These changes are rarely about choice. More often, they reflect increased effort, discomfort, or fatigue.`,
          `Then there are cognitive changes. Not every moment of forgetfulness is cause for concern. But when memory begins to interfere with daily routines—medications, safety, or decision-making—it becomes something to pay closer attention to.`,
          `None of these signs exist in isolation for long. They tend to overlap, building a picture of what daily life actually looks like behind the scenes.`,
        ],
      },
      {
        heading: 'When Does Forgetting Become a Warning Sign?',
        body: [
          `Forgetting becomes a concern when it starts affecting safety, routine, or the ability to follow through on essential tasks. Occasional lapses are normal. Repeated patterns that disrupt daily life are not.`,
          `There's a difference between misplacing keys and forgetting to turn off the stove. Between needing a reminder and being unable to follow a sequence of steps that was once familiar.`,
          `In many cases, the concern isn't memory alone—it's what memory affects. Medication schedules, hydration, mobility decisions, and even recognizing when help is needed all depend on cognitive clarity.`,
          `When those areas begin to slip, support becomes less about convenience and more about maintaining stability.`,
        ],
      },
      {
        heading: 'Why Small Changes Tend to Escalate',
        body: [
          `One missed medication may not cause immediate harm. One near-fall may end without injury. One skipped meal may go unnoticed.`,
          `But these moments rarely stay isolated.`,
          `They repeat. They overlap. And over time, they create patterns that increase risk. A missed medication affects how the body responds the next day. Reduced movement leads to further weakness. Inconsistent routines make recovery or management of chronic conditions harder to maintain.`,
          `What looks manageable in the short term often becomes difficult to control later—not because of a single event, but because of accumulated inconsistency.`,
        ],
      },
      {
        heading: 'How Do You Know It\'s Time to Bring in Help?',
        body: [
          `It's time to consider in-home care when maintaining consistency at home becomes difficult without ongoing effort or concern. The question is less about a single moment and more about whether things feel stable day to day.`,
          `Some families reach this point after a hospital discharge, when the level of care required at home becomes immediately clear. Others arrive there more gradually, through a series of small realizations: routines are harder to maintain, supervision is needed more often, or the margin for error has become thinner.`,
          `There's often a period where families try to bridge the gap themselves. That effort can work for a time. But when it begins to feel unsustainable—or when consistency depends entirely on one person's availability—that's usually the point where additional support changes the situation.`,
        ],
      },
      {
        heading: 'A Practical Way to Look at It',
        body: [`If you step back and look at the day as a whole, a clearer picture often emerges.`],
        checklist: [
          'Are medications taken correctly, every day, without fail?',
          'Is movement safe without supervision?',
          'Are meals, hygiene, and routines being maintained consistently?',
          'Is someone actively monitoring changes in condition or behavior?',
        ],
        afterChecklist: `If the answer to these depends on reminders, supervision, or increasing effort, then care needs have already begun to shift.`,
      },
      {
        heading: 'What In-Home Care Actually Changes',
        body: [
          `In-home care doesn't replace independence—it reinforces what remains of it.`,
          `By introducing structure, it removes some of the variability that creates risk. Medications are handled consistently. Movement is supported safely. Daily routines regain a level of predictability that can be difficult to maintain otherwise.`,
          `For families, it also changes the role they play. Instead of managing every detail, they can step back from constant oversight and focus on being present in a different way.`,
          `For those receiving care, it often means staying in a familiar environment while still having the level of support their situation now requires.`,
          `In situations where medication management has become inconsistent, having a professional caregiver handle scheduling and administration can remove one of the most common sources of preventable complications at home.`,
        ],
      },
      {
        heading: 'The Part That\'s Hard to Measure',
        body: [
          `What makes this decision difficult isn't just logistics. It's what the change represents.`,
          `Noticing that a parent needs help can feel like a shift in roles. Recognizing that routines are no longer manageable alone can carry a quiet weight.`,
          `At the same time, support doesn't arrive all at once. It can start in small, specific ways—focused on the areas where consistency matters most.`,
          `And often, that's enough to stabilize everything else.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `The signs are rarely hidden. More often, they're noticed, explained, and set aside—until they start to repeat.`,
          `Paying attention to those early patterns doesn't mean rushing into decisions. It means understanding what's changing, and responding before those changes become harder to manage.`,
          `Care doesn't begin at the point of crisis. It begins at the point where consistency starts to matter more than effort.`,
        ],
      },
    ],
  },
  'after-hospital-discharge': {
    title: 'What to Do After Hospital Discharge: A Step-by-Step Guide',
    metaTitle: 'What to Do After Hospital Discharge in Maryland',
    metaDesc: 'A clear step-by-step guide for safe recovery after hospital discharge in Maryland, including warning signs, medication tips, and when to get help.',
    image: img84,
    readTime: '10 min read',
    category: 'Care Guides',
    related: [{ slug: 'home-healthcare-needed', title: 'How to Know When Home Healthcare Is Needed' }],
    sections: [
      {
        lead: `The hospital bed is gone. The monitors are quiet. You're back home. But the instructions are still echoing in your head, half-remembered and harder to organize than they seemed at discharge.`,
      },
      {
        body: [
          `The shift is immediate. In the hospital, care is continuous. At home, it becomes something you have to manage, track, and sustain. And in those first few days, the difference between "recovering" and "struggling" often comes down to how well that transition is handled.`,
          `This is where most of the uncertainty lives. Not in the diagnosis, but in what comes next.`,
        ],
      },
      {
        heading: 'What Should You Do Immediately After Hospital Discharge?',
        body: [
          `Start by turning discharge instructions into a clear, usable routine at home. The goal is not just to understand them, but to make sure they can be followed consistently in real life.`,
          `Most discharge plans include medications, activity restrictions, follow-up appointments, and symptoms to watch for. On paper, it's structured. At home, it can feel scattered.`,
          `What helps is consolidation. Keep everything in one place. Write down medication times in a way that matches the day's rhythm. Confirm upcoming appointments and how you'll get there. If something feels unclear now, it will not become clearer later without effort.`,
          `This first step is less about medical complexity and more about organization. And it sets the tone for everything that follows.`,
        ],
      },
      {
        heading: 'How Do You Prepare the Home for Recovery?',
        body: [
          `A safe recovery starts with a home environment that reduces effort and risk. Small adjustments can prevent unnecessary strain and make daily routines easier to maintain.`,
          `Think in terms of movement and access. Pathways should be clear. Frequently used items should be within reach. Lighting should be adequate, especially at night. If mobility is limited, even familiar spaces can become difficult to navigate.`,
          `In many Maryland homes—especially older properties in areas like Towson, Baltimore County, or surrounding communities—stairs, narrow hallways, and bathroom layouts can present challenges during recovery. Preparing the space with the current condition in mind, not the past routine, makes a measurable difference.`,
        ],
      },
      {
        heading: 'Why Medication Mistakes Are Common After Discharge',
        body: [
          `Medication errors often happen because routines haven't been fully established yet. Changes made during a hospital stay like new prescriptions, adjusted dosages, discontinued medications, can be difficult to track without a clear system.`,
          `This is one of the highest-risk areas in post-discharge care.`,
          `It's not just about remembering to take medication. It's about taking the right one, at the right time, in the right way. Confusion between old and new prescriptions is common. So is inconsistency in timing.`,
          `Establishing a reliable system early—whether that's a written schedule, reminders, or structured oversight—helps prevent complications that can delay recovery or lead to readmission.`,
        ],
      },
      {
        heading: 'What Warning Signs Should You Watch for After Coming Home?',
        body: [
          `Pay attention to changes that suggest recovery is not progressing as expected. These signs are often subtle at first but become more noticeable over time.`,
          `Watch for shifts in physical condition, such as increased pain, swelling, or fatigue that doesn't improve. Changes in behavior or awareness can also signal concern, particularly if they affect the ability to follow routines.`,
          `Infections, medication reactions, or complications from the original condition may not appear immediately. Early recognition is what allows them to be addressed before they escalate.`,
          `If something feels different from what was expected, even if it's difficult to explain, it's worth taking seriously.`,
        ],
      },
      {
        heading: 'Why Follow-Up Appointments Matter More Than They Seem',
        body: [
          `Follow-up care is part of the treatment plan, not an administrative step.`,
          `These appointments allow healthcare providers to assess whether recovery is progressing as intended. Adjustments are often made at this stage—medications refined, activity levels updated, concerns addressed.`,
          `Delaying or missing these visits can create gaps in care that are difficult to detect at home. What seems like a minor delay can extend recovery time or allow complications to develop unnoticed.`,
          `Planning ahead—transportation, scheduling, reminders—helps ensure these appointments happen as intended.`,
        ],
      },
      {
        heading: 'When Does Recovery Require More Support at Home?',
        body: [
          `Recovery requires additional support when consistency becomes difficult to maintain without strain. This often shows up as missed medications, unsafe movement, or routines that depend entirely on one person's availability.`,
          `Some families recognize this immediately after discharge. Others encounter it gradually, as the reality of daily care becomes clearer.`,
          `Support is not always about medical complexity. Often, it's about reliability—making sure that what needs to happen each day actually does.`,
          `When that reliability becomes difficult to sustain, bringing in structured support can stabilize the situation quickly.`,
        ],
      },
      {
        heading: 'Where Most Post-Discharge Plans Break Down',
        body: [
          `The challenge is rarely a lack of effort. It's the accumulation of small gaps.`,
          `Instructions are understood but not followed consistently. Medications are taken, but not always at the right time. Movement is possible, but not always safe.`,
          `These gaps don't usually appear all at once. They build over days.`,
          `In Maryland communities where families are balancing work, distance, and caregiving responsibilities, maintaining that level of consistency alone can be difficult. Recognizing where those gaps are forming is what allows them to be addressed early.`,
        ],
      },
      {
        heading: 'How In-Home Care Supports Recovery After Hospital Discharge',
        body: [
          `In-home care introduces structure at a point where it's often missing.`,
          `Medication schedules are followed consistently. Movement is supported safely. Daily routines regain predictability. Changes in condition are noticed earlier.`,
          `For families, this reduces the need to manage every detail personally. For patients, it allows recovery to continue in a familiar environment with the right level of support in place.`,
          `For those in Baltimore City, surrounding counties, and the greater Washington suburbs in Maryland, having access to professional in-home care means the transition from hospital to home doesn't have to rely on improvisation. It can be structured, monitored, and steady.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Recovery at home isn't just about following instructions. It's about maintaining consistency in an environment that wasn't designed for clinical care.`,
          `The difference between a smooth recovery and a complicated one often comes down to how well that consistency holds.`,
          `Not perfectly. Just reliably enough to keep things moving in the right direction.`,
        ],
      },
    ],
  },
  'reduce-fall-risk': {
    title: 'How to Reduce Fall Risk at Home',
    metaTitle: 'How to Reduce Fall Risk at Home for Seniors',
    metaDesc: 'Learn how to reduce fall risk at home with practical steps, warning signs, and safety strategies for safer daily living in Maryland.',
    image: img87,
    readTime: '7 min read',
    category: 'Care Guides',
    related: [{ slug: 'manage-medication-safely', title: 'Managing Medication Safely at Home' }],
    sections: [
      {
        lead: `The fall doesn't usually come out of nowhere. It happens in familiar spaces. The short walk to the bathroom. The step that's been taken a thousand times. The moment when balance shifts just slightly—and there's nothing close enough to hold onto.`,
      },
      {
        body: [
          `What makes falls difficult isn't just the injury. It's how quickly independence can change afterward.`,
          `Reducing fall risk at home isn't about restricting movement. It's about making everyday movement safer, steadier, and more predictable.`,
        ],
      },
      {
        heading: 'What Causes Falls at Home for Older Adults?',
        body: [
          `Falls at home are usually caused by a combination of physical changes and environmental factors. It's rarely just one issue.`,
          `Balance may not be as stable as it once was. Muscle strength can decline gradually. Medications may cause dizziness or fatigue. At the same time, the home environment often remains unchanged—furniture placement, lighting, flooring—all designed for a level of mobility that may no longer be the same.`,
          `It's this mismatch that creates risk.`,
          `A small change in physical ability, combined with an unchanged environment, is often where falls begin.`,
        ],
      },
      {
        heading: 'What Are the Early Warning Signs of Fall Risk?',
        body: [
          `Early signs of fall risk often show up as hesitation, instability, or changes in movement patterns. These signs usually appear before any actual fall occurs.`,
          `You might notice slower transitions—standing up, sitting down, turning. There may be moments of reaching for support where none was needed before. Near-falls are common but often dismissed because they didn't result in injury.`,
          `Changes in confidence are just as important. When someone becomes more cautious or avoids certain movements altogether, it often reflects an awareness that balance is no longer reliable.`,
          `These signals matter. They are often the clearest opportunity to prevent a more serious incident.`,
        ],
      },
      {
        heading: 'How Can You Reduce Fall Risk at Home?',
        body: [
          `Reducing fall risk starts with making the environment and daily routines support safe movement. The goal is not to limit activity, but to remove unnecessary hazards and improve stability.`,
          `Focus first on the areas where movement happens most frequently.`,
          `Clear pathways so there's nothing to step over or around. Ensure lighting is consistent, especially in hallways and bathrooms where visibility matters most. Rugs, cords, and uneven surfaces should be addressed. Not because they always cause falls, but because they increase the chance when balance is already compromised.`,
          `Support should also be placed where it's naturally needed. Bathrooms, for example, are one of the most common locations for falls—not because they're inherently unsafe, but because they combine movement, moisture, and limited space.`,
          `Beyond the environment, routines matter. Moving too quickly, especially when getting up from bed or a chair, can increase instability. Encouraging slower, more deliberate movement often reduces risk more effectively than trying to "be careful" in a general sense.`,
        ],
      },
      {
        heading: 'A Quick Safety Check for the Home',
        body: [`A simple way to assess fall risk is to walk through the home with attention to movement:`],
        checklist: [
          'Can someone move from room to room without needing to navigate obstacles?',
          'Is there adequate lighting at all times of day, including nighttime?',
          'Are commonly used items within easy reach?',
          'Are high-risk areas like bathrooms and stairs supported appropriately?',
        ],
        afterChecklist: `If any of these require extra effort or adjustment, they're worth addressing early.`,
      },
      {
        heading: 'When Does Fall Risk Become a Serious Concern?',
        body: [
          `Fall risk becomes more serious when instability begins to affect daily routines or when near-falls become more frequent. At this stage, the likelihood of an actual fall increases significantly.`,
          `A previous fall is also an important indicator. Once a fall has occurred, the risk of another tends to rise—not only because of physical factors, but because confidence in movement is often reduced.`,
          `In these situations, prevention becomes more structured. It's no longer just about removing hazards, but about actively supporting safe movement throughout the day.`,
        ],
      },
      {
        heading: 'How In-Home Care Helps Reduce Fall Risk',
        body: [
          `Consistent support is one of the most effective ways to reduce fall risk.`,
          `Having someone present during movement, especially during transfers, walking, or bathroom use, adds a layer of safety that the environment alone cannot provide. It also allows early changes in mobility to be noticed and addressed before they lead to injury.`,
          `For families in Maryland, in-home care often becomes part of fall prevention when safety can no longer rely on the environment alone.`,
          `Support with mobility, transfers, and daily routines helps maintain independence while reducing the likelihood of injury. It also removes the pressure on family members to monitor every movement themselves.`,
        ],
      },
      {
        heading: 'What Happens After a Fall Matters Too',
        body: [
          `Even with precautions, falls can still happen.`,
          `What matters then is how quickly support is provided and how recovery is managed. A fall can lead to reduced mobility, increased caution, and changes in daily routine that affect overall quality of life.`,
          `Addressing those changes early—physically and practically—helps prevent a cycle where reduced movement leads to further decline.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Fall prevention isn't about eliminating movement. It's about making movement safer in the environment where it happens every day.`,
          `The earlier small risks are addressed, the easier it is to maintain confidence, stability, and independence over time.`,
        ],
      },
    ],
  },
  'manage-medication-safely': {
    title: 'Managing Medication Safely at Home',
    metaTitle: 'Managing Medications Safely at Home for Seniors',
    metaDesc: 'Learn how to manage medications safely at home, avoid common errors, and know when to get support for aging adults in Maryland.',
    image: imgMedication,
    readTime: '8 min read',
    category: 'Care Guides',
    related: [
      { slug: 'after-hospital-discharge', title: 'What to Do After Hospital Discharge' },
      { slug: 'home-healthcare-needed', title: 'How to Know When Home Healthcare Is Needed' },
    ],
    sections: [
      {
        lead: `The pillbox is full. The instructions are written down. Everything looks organized, until a dose is missed, taken twice, or taken at the wrong time.`,
      },
      {
        body: [
          `Medication management rarely breaks down all at once. It slips in small ways. A schedule gets adjusted. A new prescription is added. An old one isn't fully discontinued. Over time, what once felt routine becomes something that requires constant attention to get right.`,
          `And when it isn't right, the effects aren't always immediate—but they are real.`,
        ],
      },
      {
        heading: 'Why Is Medication Management So Challenging at Home?',
        body: [
          `Medication management becomes difficult when routines change, prescriptions increase, or memory and consistency are affected. What was once simple can become complex without much warning.`,
          `After a hospital discharge, medication lists often change. New prescriptions are introduced, dosages adjusted, and timing becomes more specific. Even for someone who has always managed their medications well, this transition can create confusion.`,
          `At home, there's no built-in system to ensure medications are taken correctly. It depends entirely on memory, organization, and consistency. Three things that are often under pressure during recovery or with age-related changes.`,
        ],
      },
      {
        heading: 'What Are the Most Common Medication Mistakes?',
        body: [`Most medication errors at home are not intentional. They happen because systems aren't fully in place yet. Common issues include:`],
        checklist: [
          'Missing doses or taking them at inconsistent times',
          'Taking the wrong medication due to similar packaging',
          'Continuing medications that were meant to be stopped',
          'Taking duplicate doses when unsure if a dose was already taken',
        ],
        afterChecklist: `These mistakes are easy to make, especially when multiple medications are involved. But over time, they can affect recovery, worsen existing conditions, or lead to avoidable complications.`,
      },
      {
        heading: 'How Can You Manage Medications Safely at Home?',
        body: [
          `Safe medication management starts with creating a routine that is clear, consistent, and easy to follow—even on difficult days.`,
          `This usually means simplifying where possible. Keep medications in one designated place. Avoid splitting them across different rooms or containers without a clear system. Use a daily schedule that reflects real-life timing, not just written instructions.`,
          `Consistency matters more than complexity.`,
          `It also helps to build in reminders like alarms, written checklists, or visual cues. The goal is to reduce reliance on memory alone.`,
          `For families managing care, visibility is important. Knowing whether medications have been taken—and when—prevents guesswork later in the day.`,
        ],
      },
      {
        heading: 'How Do You Know If Medication Management Is Becoming Unsafe?',
        body: [
          `Medication management becomes unsafe when consistency can no longer be maintained without close supervision. This often shows up before any major issue occurs.`,
          `You might notice increasing uncertainty. Questions like "Did I take this already?" or "Was this supposed to be taken today?" There may be missed doses, or medications taken at irregular times.`,
          `In some cases, side effects begin to appear without a clear explanation. Fatigue, dizziness, or confusion can sometimes be linked to how medications are being taken, not just the medications themselves.`,
          `When routines depend on constant reminders or checking, it's a sign that the margin for error is narrowing.`,
        ],
      },
      {
        heading: 'Why Medication Errors Matter More Than They Seem',
        body: [
          `The impact of medication errors is often gradual.`,
          `A missed dose might not cause immediate harm. But repeated inconsistencies can affect how a condition is managed over time. Blood pressure may fluctuate. Recovery may slow. Symptoms may become harder to stabilize.`,
          `In more serious cases, incorrect dosages or interactions between medications can lead to hospital readmission.`,
          `This is why medication management is treated as one of the most critical parts of in-home care. Not because it's complicated, but because it requires consistency every single day.`,
        ],
      },
      {
        heading: 'A Simple Structure That Helps',
        body: [`A reliable system doesn't need to be complicated, but it does need to be consistent.`],
        checklist: [
          'One clear medication list, updated and accessible',
          'A fixed schedule that aligns with daily routines',
          'A method for tracking whether doses have been taken',
          'Regular review, especially after any medical change',
        ],
        afterChecklist: `If any part of this system feels difficult to maintain, that's usually where errors begin.`,
      },
      {
        heading: 'When Additional Support Becomes Necessary',
        body: [
          `There's a point where managing medications safely requires more than reminders.`,
          `If medications are frequently missed, if schedules are difficult to follow, or if there's uncertainty about what should be taken and when, additional support can bring stability back into the routine.`,
          `This is especially true after hospital discharge, when medication changes are most common. In these cases, structured support helps ensure that recovery is not disrupted by preventable errors.`,
        ],
      },
      {
        heading: 'How In-Home Care Supports Medication Safety',
        body: [
          `In-home care introduces consistency where it's most needed.`,
          `Medication schedules are followed accurately. Changes are tracked and implemented correctly. There's clarity around what has been taken and what hasn't.`,
          `For families in Towson, Baltimore County, and surrounding Maryland areas, this kind of support often removes one of the most demanding aspects of caregiving.`,
          `It shifts medication management from something that requires constant oversight to something that is handled reliably, day after day.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Medication management at home doesn't fail because people aren't trying. It fails when the system depends too heavily on memory and too little on structure.`,
          `Putting that structure in place early and consistently keeps small errors from becoming larger problems.`,
          `And in most cases, that's what makes the difference.`,
        ],
      },
    ],
  },
  'caregiver-burnout': {
    title: 'When Caregiving Becomes Overwhelming: What to Do Next',
    metaTitle: 'When Caregiving Becomes Overwhelming: What to Do',
    metaDesc: "Caregiving becoming too much? Learn the signs of caregiver burnout, what to do next, and how to get support at home in Maryland.",
    image: imgCaregiverBurnout,
    readTime: '9 min read',
    category: 'Care Guides',
    related: [
      { slug: 'home-healthcare-needed', title: 'How to Know When Home Healthcare Is Needed' },
      { slug: 'after-hospital-discharge', title: 'What to Do After Hospital Discharge' },
    ],
    sections: [
      {
        lead: `It doesn't happen all at once. It builds in the background—missed sleep, constant adjustments, the feeling that you're always needed but never quite caught up.`,
      },
      {
        body: [
          `What started as helping out becomes managing everything. And somewhere along the way, the pace changes.`,
          `You begin organizing your day around someone else's needs entirely. Then your evenings. Then your nights.`,
          `By the time it feels overwhelming, you've usually been carrying it for longer than you realized.`,
        ],
      },
      {
        heading: 'What Are the Signs of Caregiver Burnout?',
        body: [
          `Caregiver burnout shows up as ongoing physical, emotional, and mental strain that doesn't ease with rest. It's not just fatigue, it's the sense that the demands of care are exceeding what you can realistically sustain.`,
          `You might notice that you're more easily frustrated, even by small things. Tasks that used to feel manageable now feel heavy. Sleep becomes inconsistent, either because you're needed during the night or because your mind doesn't fully switch off.`,
          `There's also a shift in attention. It becomes harder to keep track of details like appointments, medications, routines... Not because you're careless, but because you're managing too many moving parts at once.`,
          `In many cases, the signs aren't dramatic. They're steady. And that's what makes them easy to overlook.`,
        ],
      },
      {
        heading: 'When Does Caregiving Become Too Much to Handle Alone?',
        body: [
          `Caregiving becomes unsustainable when maintaining consistent care starts to depend entirely on your availability, energy, and constant attention. At that point, even short disruptions can affect the quality and safety of care.`,
          `This often shows up in small gaps. A medication is delayed. A routine is shortened. Supervision becomes harder to maintain while balancing work or other responsibilities.`,
          `It's not about willingness. Most caregivers continue well past what's manageable because stepping back feels difficult.`,
          `But when care depends on one person doing everything, it becomes fragile. And fragile systems tend to break under pressure.`,
        ],
      },
      {
        heading: 'Why Many Caregivers Wait Too Long to Get Help',
        body: [
          `There's a quiet expectation many people carry: that they should be able to handle it.`,
          `Sometimes it's a sense of responsibility. Sometimes it's concern about bringing someone else into their home. Sometimes it's simply not knowing what kind of help would actually make a difference.`,
          `There's also the dynamic between caregiver and patient. When someone begins to rely on you—not just for tasks, but emotionally—it can feel difficult to change that arrangement without causing distress.`,
          `So support is delayed. Not because it isn't needed, but because the decision carries weight on both sides.`,
        ],
      },
      {
        heading: 'What Changes When Support Is Introduced',
        body: [
          `Support doesn't replace the caregiver. It stabilizes the situation.`,
          `When additional help is brought in, the immediate effect is often consistency. Tasks are handled reliably. Routines are maintained. The pressure to manage everything alone begins to ease.`,
          `For the caregiver, it creates space—sometimes for the first time in a while. Not just physical time, but mental space. The constant monitoring, the need to remember every detail, begins to reduce.`,
          `For the person receiving care, it can actually improve the overall experience. Care becomes more structured. Interactions with family shift away from being task-focused and back toward something more natural.`,
        ],
      },
      {
        heading: 'A Practical Way to Assess Your Situation',
        body: [`If you're unsure whether caregiving has become too much, it can help to look at a few key areas:`],
        checklist: [
          'Are you able to maintain care routines consistently every day?',
          'Are you getting enough rest to function well?',
          'Can you step away, even briefly, without concern?',
          'Is your own health or well-being being affected?',
        ],
        afterChecklist: `If these questions are difficult to answer confidently, it usually points to a need for additional support.`,
      },
      {
        heading: 'How In-Home Care Supports Both the Caregiver and the Patient',
        body: [
          `In-home care works best when it's integrated into the existing dynamic; not imposed on it.`,
          `Support can be focused on specific areas: helping with mobility, managing medications, assisting with personal care, or providing supervision during key parts of the day.`,
          `This reduces the load without removing the caregiver's role entirely.`,
          `For families in Towson, Baltimore County, and surrounding Maryland areas, this approach often makes caregiving more sustainable. It allows care to continue at home without requiring one person to carry it alone.`,
          `In situations where medication management or daily routines have become difficult to maintain, having structured support in place can prevent the kinds of gaps that lead to larger issues over time.`,
        ],
      },
      {
        heading: 'The Emotional Side of Stepping Back',
        body: [
          `One of the harder parts of bringing in help is not logistical; it's emotional.`,
          `It can feel like stepping back means giving something up. In reality, it often means preserving what matters most.`,
          `When caregiving becomes overwhelming, the relationship itself can start to shift under the strain. Introducing support doesn't weaken that relationship. It protects it from becoming defined entirely by responsibility.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Caregiving is not meant to be carried alone indefinitely.`,
          `There's a point where sustaining care requires more than effort. It requires structure, consistency, and support that doesn't depend on one person's capacity.`,
          `Recognizing that point isn't a failure. It's a decision to make the situation more stable for everyone involved.`,
        ],
      },
    ],
  },
  'types-of-in-home-care': {
    title: 'Understanding Different Types of In-Home Care',
    metaTitle: 'Types of In-Home Care: What Families Need to Know',
    metaDesc: 'Learn the difference between medical and non-medical home care, what services apply to your situation, and how to choose the right level of support.',
    image: img68,
    readTime: '8 min read',
    category: 'Care Guides',
    related: [
      { slug: 'home-healthcare-needed', title: 'How to Know When Home Healthcare Is Needed' },
      { slug: 'manage-medication-safely', title: 'Managing Medication Safely at Home' },
    ],
    sections: [
      {
        lead: `Not all care is the same. And when families begin looking into support options, the number of terms, categories, and service types can make a straightforward decision feel unnecessarily complicated.`,
      },
      {
        body: [
          `The challenge isn't a lack of options. It's knowing which option actually fits the situation. Choosing incorrectly can lead to gaps in support or services that don't address the real need.`,
          `Understanding the difference between types of in-home care helps families make decisions based on what's actually required—not assumptions or incomplete information.`,
        ],
      },
      {
        heading: 'What Is the Difference Between Medical and Non-Medical Home Care?',
        body: [
          `Medical home care involves clinical services provided by licensed healthcare professionals. This can include wound care, IV therapy, physical therapy, or skilled nursing tasks that require medical training and oversight.`,
          `Non-medical home care focuses on daily living support. This includes assistance with personal hygiene, mobility, medication reminders, meal preparation, companionship, and household routines. It is delivered by trained caregivers rather than clinical staff.`,
          `Many families initially assume they need medical home care when what's actually required is consistent, structured non-medical support. The reverse can also be true—particularly after hospital discharge, when clinical needs may exist alongside daily living challenges.`,
          `The distinction matters because it affects what kind of provider you need, what services are included, and how care is structured day to day.`,
        ],
      },
      {
        heading: 'What Types of Non-Medical In-Home Care Are Available?',
        body: [`Non-medical in-home care covers a range of services designed to support daily life at home. The most common types include:`],
        checklist: [
          'Personal care assistance — bathing, dressing, grooming, and toileting support',
          'Mobility and transfer support — help with walking, repositioning, and safe movement',
          'Medication reminders and administration — ensuring medications are taken correctly and on time',
          'Cognitive stimulation — structured engagement to support mental clarity and routine',
          'Companionship — consistent social presence to reduce isolation and improve wellbeing',
        ],
        afterChecklist: `These services can be delivered individually or combined into a care plan that addresses multiple needs. The right combination depends on the person's current condition, daily routine, and level of independence.`,
      },
      {
        heading: 'How Do You Know What Type of Care Your Situation Requires?',
        body: [
          `Start by looking at what's actually happening day to day. The type of care needed is usually determined by the specific tasks that have become difficult, unsafe, or inconsistent.`,
          `If the primary concerns are medication management, mobility, personal hygiene, or maintaining daily routines, non-medical in-home care is often the appropriate starting point.`,
          `If there are clinical needs such as wound management, catheter care, or post-surgical monitoring, medical home care may be required—either on its own or alongside non-medical support.`,
          `Many situations fall somewhere in between. A person may need clinical follow-up after discharge but also require daily assistance with personal care and medication. In these cases, a combined approach works best.`,
        ],
      },
      {
        heading: 'What Happens When the Wrong Type of Care Is Chosen?',
        body: [
          `Choosing the wrong type of care usually shows up as gaps. A caregiver may be present, but the specific support needed isn't being provided. Or clinical services may be in place, but daily routines and personal care are left unaddressed.`,
          `These gaps don't always appear immediately. They develop over days or weeks as unmet needs begin to affect stability, safety, or recovery.`,
          `The most common mistake is underestimating the need for structured daily support. Families often focus on medical needs while overlooking the reality that daily living tasks—medications, movement, hygiene—are what hold the day together.`,
        ],
      },
      {
        heading: 'How Care Plans Are Built Around Real Needs',
        body: [
          `Effective care starts with understanding what the day actually looks like—not what it should look like.`,
          `A care assessment evaluates current capabilities, safety risks, daily routines, and the level of support already in place. From there, a plan is built around the specific areas where consistency is breaking down.`,
          `This means care isn't one-size-fits-all. A person recovering from surgery may need intensive short-term support. Someone managing a chronic condition may need long-term, steady assistance. A family navigating cognitive changes may need a combination of supervision, routine reinforcement, and companionship.`,
          `The plan adapts as needs change—because they almost always do.`,
        ],
      },
      {
        heading: 'How to Choose the Right Level of Support',
        body: [
          `Choosing the right level of support doesn't require having all the answers upfront. It requires honest observation of what's happening now and willingness to adjust as things evolve.`,
          `A short consultation can often clarify what's needed. By describing the current situation—what's working, what's not, and where concern is growing—families can receive guidance on which type of care fits best.`,
          `The goal is not to choose the most comprehensive option. It's to choose the most appropriate one—and to have a plan that can grow if the situation changes.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Understanding the types of in-home care available is the first step toward making a decision that actually fits.`,
          `The right care isn't about doing the most. It's about doing what's needed—consistently, reliably, and in a way that supports both the person receiving care and the family around them.`,
          `When the type of care matches the reality of the situation, everything else becomes easier to manage.`,
        ],
      },
    ],
  },
  'cognitive-changes': {
    title: 'When Cognitive Changes Begin to Affect Daily Life',
    metaTitle: 'When Cognitive Changes Affect Daily Life at Home',
    metaDesc: 'Learn early signs of cognitive changes at home, how they affect safety and routines, and when in-home support may help in Maryland.',
    image: img82,
    readTime: '7 min read',
    category: 'Care Guides',
    related: [
      { slug: 'manage-medication-safely', title: 'Managing Medication Safely at Home' },
      { slug: 'caregiver-burnout', title: 'When Caregiving Becomes Overwhelming' },
    ],
    sections: [
      {
        lead: `A kettle is left on a little too long. A familiar route home suddenly requires a pause. Medication that used to be automatic is now questioned, repeated, or missed.`,
      },
      {
        body: [
          `On their own, these moments are easy to explain away. Over time, they begin to form a pattern that's harder to ignore.`,
          `Cognitive changes rarely arrive as a single event. They show up in everyday routines first—quietly shifting how memory, judgment, and sequencing support daily life at home.`,
        ],
      },
      {
        heading: 'What Are the Early Signs That Cognitive Changes Are Affecting Daily Life?',
        body: [
          `Early signs appear when small lapses begin to interfere with consistency, safety, or the ability to complete familiar tasks. It's less about forgetting—and more about what that forgetting begins to affect.`,
          `Families often notice repetition, misplaced items in unusual places, or difficulty following steps that once felt automatic. Cooking, managing medications, or keeping track of time may start to require more prompting.`,
          `These changes matter most as a pattern. When daily routines begin to rely on repeated reminders or correction, it often signals that cognitive processing—not just memory—is shifting.`,
        ],
      },
      {
        heading: 'When Should Families Consider In-Home Support for Cognitive Changes?',
        body: [
          `Support becomes relevant when cognitive changes begin to affect safety, routine, or the ability to remain alone without concern. At this point, maintaining consistency usually requires more than informal help.`,
          `This often shows up in practical ways. Medication routines are no longer reliable. Daily structure breaks down despite reminders. Supervision becomes necessary, even for short periods.`,
          `The decision is not about replacing family involvement. It's about stabilizing the parts of the day that are becoming unpredictable.`,
        ],
      },
      {
        heading: 'A Simple Way Families Often Understand the Shift',
        body: [`Cognitive changes don't follow a strict timeline, but families often recognize stages in terms of daily function:`],
        checklist: [
          'Early stage: Occasional forgetfulness, routines intact with light prompting',
          'Moderate impact: Repeated assistance needed to maintain daily structure',
          'Higher risk: Safety concerns, medication errors, or disorientation at home',
        ],
        afterChecklist: `This isn't a clinical scale. It's a practical way to understand when support may need to shift from occasional help to something more structured.`,
      },
      {
        heading: 'How Cognitive Changes Affect Safety—Not Just Memory',
        body: [
          `Memory is often the most visible change, but safety is where the impact becomes clearer.`,
          `A person may remember their medication—but not whether they've already taken it. They may recognize their home—but hesitate when completing a familiar task.`,
          `These moments create small gaps in judgment and sequencing that can increase risk over time.`,
          `Common concerns include medication duplication, leaving appliances on, or difficulty recognizing unsafe situations. These don't usually happen all at once. They build gradually, which is why they're often underestimated.`,
        ],
      },
      {
        heading: 'How Structured Support Helps Maintain Routine and Stability',
        body: [
          `Cognitive changes respond best to consistency.`,
          `Rather than correcting every mistake, structured support focuses on creating a predictable rhythm—where daily tasks happen in the same way, at the same time, with calm guidance.`,
          `This might include support with medications, assistance with daily routines, or gentle cueing to help with sequencing. The goal is not to take over independence, but to reinforce it where it's beginning to weaken.`,
          `For families in Baltimore City, surrounding counties, and the greater Washington suburbs in Maryland, this kind of in-home support often becomes the difference between managing uncertainty and restoring stability at home.`,
        ],
      },
      {
        heading: 'What Families Often Underestimate at This Stage',
        body: [
          `What's easy to miss is how quickly small inconsistencies begin to add up.`,
          `A missed step here. A repeated question there. Each manageable on its own—but together, they begin to disrupt the flow of daily life.`,
          `At the same time, caregiving quietly expands. What starts as occasional help becomes ongoing supervision. The responsibility stretches into more hours of the day, often without a clear boundary.`,
          `This is where many families begin to feel the strain—even if they haven't named it yet.`,
        ],
      },
      {
        heading: 'Moving Forward with Clarity',
        body: [
          `Cognitive changes don't require rushed decisions. They require attention to patterns.`,
          `What matters is not a single moment of confusion, but how often those moments are happening—and what they are beginning to affect.`,
          `With the right support, many people continue living at home with familiarity and routine intact, even as needs change.`,
          `The goal isn't to act quickly. It's to act appropriately—before inconsistency turns into risk.`,
        ],
      },
    ],
  },
  'daily-activities-difficult': {
    title: 'When Daily Activities Become Difficult: Recognizing When Home Support Becomes Necessary',
    metaTitle: 'When Daily Activities Become Difficult | Home Care Support',
    metaDesc: 'Understand when daily activities become difficult and what it signals about in-home care needs, safety risks, and support options for families.',
    image: imgDailyActivities,
    readTime: '10 min read',
    category: 'Care Guides',
    related: [
      { slug: 'reduce-fall-risk', title: 'How to Reduce Fall Risk at Home' },
      { slug: 'manage-medication-safely', title: 'Managing Medication Safely at Home' },
    ],
    sections: [
      {
        lead: `There is often a quiet shift that happens long before anyone names it. A morning routine that used to take half an hour now stretches into the late morning. A parent pauses longer at the edge of the bed before standing.`,
      },
      {
        body: [
          `These changes rarely arrive as a single event. They accumulate in fragments: slower movement, missed steps in familiar routines, or growing hesitation around tasks that once required no thought.`,
          `For many families, this is the point where "independence" starts to feel less stable, even if no one is ready to say it out loud.`,
          `Understanding what is happening in these moments helps families respond earlier, with more clarity and less crisis-driven decision-making.`,
        ],
      },
      {
        heading: 'What does it mean when daily activities start becoming difficult?',
        body: [
          `When daily activities become difficult, it usually means a person is beginning to lose consistent ability to complete essential tasks safely or independently. These tasks are often referred to as activities of daily living (ADLs), and they include movement, hygiene, dressing, toileting, eating, and taking medication correctly.`,
          `This change does not always indicate sudden decline. More often, it reflects gradual shifts in strength, cognition, balance, or coordination.`,
          `At this stage, families often notice that support is already being provided informally by way of reminders, supervision, physical assistance—without formally recognizing it as care.`,
        ],
      },
      {
        heading: 'Which daily tasks usually become difficult first?',
        body: [`The earliest changes tend to appear in tasks that require coordination, memory, or physical stability. Most commonly affected areas include:`],
        checklist: [
          'Safe movement between rooms or positions (sitting, standing, walking)',
          'Personal hygiene routines such as bathing or grooming',
          'Medication consistency and timing',
          'Toileting and continence management',
          'Meal preparation and regular eating patterns',
        ],
        afterChecklist: `These tasks are demanding because they require multiple steps to happen in sequence. When even one step is missed or slowed, the entire routine becomes less reliable.`,
      },
      {
        heading: "How do you know it's more than just 'slowing down'?",
        body: [
          `The key distinction is consistency and safety. Slower movement alone is not the primary concern. Difficulty becomes significant when it starts affecting safety, dignity, or daily structure.`,
          `A practical way to assess this is to observe patterns rather than isolated moments. When routines begin to require supervision, correction, or repeated assistance, it often signals that informal support systems are reaching their limit.`,
          `This is also the point where caregiver responsibility quietly increases, even if roles have not officially changed.`,
        ],
      },
      {
        heading: 'What difficulty in daily activities may look like',
        checklist: [
          'Mobility changes: hesitating before standing, relying on furniture for balance, or avoiding movement',
          'Personal care changes: inconsistent bathing, difficulty dressing, or skipping grooming',
          'Medication inconsistency: missed doses, double dosing, or confusion about timing',
          'Toileting changes: urgency, accidents, or increased need for assistance',
          'Routine disruption: irregular sleep, meals, or reduced engagement in daily structure',
        ],
        afterChecklist: `These patterns are not isolated diagnoses. They are indicators that daily support needs may be shifting.`,
      },
      {
        heading: 'Why do small changes matter so much at home?',
        body: [
          `Home environments are familiar, but they are not risk-free. When daily functioning begins to change, the home can quickly become a place where small difficulties have larger consequences—missed steps on stairs, forgotten medications, or delayed assistance during a fall or illness.`,
          `The challenge for families is that these risks do not always present themselves clearly in advance. Instead, they appear through near-misses, increased reliance, or growing hesitation around everyday tasks.`,
          `This is why early recognition is important. It allows adjustments to be made before a crisis forces rapid decisions under pressure.`,
        ],
      },
      {
        heading: 'When does home support become the next step?',
        body: [
          `Home support becomes relevant when daily tasks require more than occasional help and begin to need structured, consistent assistance. This does not mean someone can no longer live at home safely. It means the current level of informal support may no longer be enough to maintain stability.`,
          `In many cases, families begin by filling small gaps like helping with medications, supervising movement, or assisting with personal care. Over time, this can evolve into a continuous responsibility that affects both the person receiving care and the caregiver's own wellbeing.`,
          `This is often the stage where structured in-home care becomes practical rather than optional.`,
        ],
      },
      {
        heading: 'What happens if nothing changes?',
        body: [
          `Without adjustment, difficulty in daily activities tends to progress gradually. Tasks take longer, require more effort, and eventually begin to be avoided altogether. This can lead to reduced mobility, inconsistent nutrition, medication errors, and increased isolation.`,
          `However, the most significant impact is often on the household itself. Family caregivers begin to structure their day around supervision and assistance, which can quietly reshape work, rest, and emotional capacity over time.`,
          `Recognizing the shift early allows families to introduce support in a controlled, manageable way rather than in response to an emergency.`,
        ],
      },
      {
        heading: 'Closing Thought',
        body: [
          `Daily activity difficulty is not a single threshold. It is a spectrum. The goal is not to wait for complete inability, but to recognize when effort, risk, and inconsistency begin to outweigh independence.`,
          `At that point, support is not about taking over. It is about restoring structure to everyday life so that daily routines remain safe, predictable, and sustainable for everyone involved.`,
          `When daily activities begin to change, the most useful response is not urgency, but clarity.`,
        ],
      },
    ],
  },
  'incontinence-care': {
    title: 'How to Handle Incontinence Care at Home While Preserving Dignity and Daily Comfort',
    metaTitle: 'Incontinence Care at Home: Dignity & Practical Support',
    metaDesc: 'Learn how to manage incontinence care at home while protecting dignity, comfort, and safety. Practical guidance for families and caregivers.',
    image: imgIncontinence,
    readTime: '9 min read',
    category: 'Care Guides',
    related: [
      { slug: 'reduce-fall-risk', title: 'How to Reduce Fall Risk at Home' },
      { slug: 'cognitive-changes', title: 'When Cognitive Changes Begin to Affect Daily Life' },
    ],
    sections: [
      {
        lead: `A change of clothes starts to travel along "just in case." Bedding is adjusted. Routines begin to shift quietly around access to a bathroom.`,
      },
      {
        body: [
          `At first, it's occasional. Easy to work around. Easy not to name directly.`,
          `Over time, it becomes part of how the day is planned—when to go out, how long to stay, what feels manageable, what doesn't. Incontinence care at home is rarely only about hygiene. It affects timing, confidence, and how comfortable someone feels moving through their own space.`,
          `Handled with the right structure, it remains a manageable medical condition. Without that structure, it can begin to limit independence in ways that are harder to reverse.`,
        ],
      },
      {
        heading: 'When does incontinence become a care issue rather than a temporary setback?',
        body: [
          `Incontinence is the loss of reliable control over bladder or bowel function, when getting to the toilet in time becomes uncertain, and leakage begins to occur.`,
          `It becomes a care concern when it starts to affect hygiene, safety, or the ability to maintain daily routines without assistance.`,
          `The shift is usually gradual. Families often notice it first through laundry frequency, nighttime disruptions, or changes in personal confidence rather than a direct statement from the person experiencing it.`,
        ],
      },
      {
        heading: 'From a care perspective, it becomes more significant when:',
        checklist: [
          'Toileting routines are missed or delayed due to mobility or confusion',
          'Skin irritation or recurrent discomfort begins to appear',
          'Bathroom access becomes unsafe without assistance',
          'Medication, hydration, or mobility issues contribute to accidents',
          'The person begins avoiding social or daily activities due to fear of incidents',
        ],
        afterChecklist: `At this point, incontinence care at home is no longer only about products or hygiene management. It becomes part of a broader support structure that helps maintain stability in daily life.`,
      },
      {
        heading: 'How do you protect dignity during incontinence care at home?',
        body: [
          `Dignity is protected through predictability, privacy, and calm communication during care routines. The way assistance is delivered often matters as much as the assistance itself.`,
          `People rarely lose dignity because they need help. They feel it when help is rushed, unclear, or inconsistent.`,
        ],
      },
      {
        heading: 'Small adjustments that make a significant difference:',
        checklist: [
          'Explain each step before assisting, even if the routine is familiar',
          'Maintain privacy by preparing materials in advance',
          'Avoid unnecessary commentary during care tasks',
          'Keep routines consistent to reduce anxiety or confusion',
          'Focus on capability first — what the person can still do independently',
        ],
        afterChecklist: `Dignity is not preserved through avoidance of the topic. It is preserved through steady, respectful attention to it.`,
      },
      {
        heading: 'What practical steps help manage incontinence safely at home?',
        body: [
          `Effective incontinence care at home relies on structure, preparation, and early intervention rather than reaction after an incident occurs.`,
          `A simple framework many families find useful includes: routine-based toileting support, environmental adjustments, skin protection and hygiene consistency, hydration timing awareness, and clothing simplification.`,
          `These steps are not about controlling every outcome. They are about reducing stress points in the daily rhythm so the person can move through the day with fewer disruptions and more confidence.`,
        ],
      },
      {
        heading: 'Daily Incontinence Care at Home Checklist',
        checklist: [
          'Scheduled toileting times (morning, after meals, before sleep)',
          'Clean, accessible clothing laid out in advance',
          'Bathroom pathway kept clear and well-lit',
          'Hygiene supplies positioned within reach',
          'Skin checked daily for irritation or redness',
          'Documentation of patterns (timing, triggers, frequency)',
        ],
        afterChecklist: `This structure helps identify patterns early and reduces reactive care, which is often more stressful for both caregiver and patient.`,
      },
      {
        heading: 'Why support often becomes necessary even when families are managing well',
        body: [
          `Many families manage incontinence independently for a long time. The challenge is not usually knowledge. It is consistency over time, especially when combined with mobility changes, memory decline, or fatigue in the household.`,
          `Incontinence rarely exists in isolation. It often appears alongside other shifts such as slower movement, medication complexity, or cognitive changes that affect routine awareness.`,
          `When that combination develops, having structured in-home assistance can reduce risk and stabilize daily care.`,
        ],
      },
      {
        heading: 'What changes when care becomes consistent rather than reactive?',
        body: [
          `When incontinence care at home is managed consistently, families often notice fewer disruptions in sleep, reduced anxiety around outings, and improved comfort in daily routines. The focus shifts from managing incidents to maintaining stability.`,
          `It does not remove the condition. It makes it easier to live with it in a way that preserves normality where possible.`,
          `The most important shift is often not physical. It is psychological. Daily life becomes less organized around avoiding problems and more centered on maintaining routine.`,
          `The presence of incontinence does not define a person's independence. It does, however, ask for a different kind of structure around them. One that is steady, practical, and attentive to detail.`,
          `With the right support in place, it becomes one part of life rather than the organizing principle of it.`,
        ],
      },
    ],
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const { openModal } = useFormModal()
  const post = posts[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) document.title = post.metaTitle
  }, [slug, post])

  if (!post) return <Navigate to="/resources" replace />

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link to="/resources" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 border border-blue-400/40 rounded-full text-sm font-semibold text-blue-200">
              <BookOpen className="w-3.5 h-3.5" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-blue-100/80">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>
          <p className="text-lg text-blue-100/80 leading-relaxed">{post.metaDesc}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover" />
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              {section.heading && (
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 mt-10">{section.heading}</h2>
              )}
              {section.lead && (
                <p className="text-xl text-slate-700 leading-[1.8] mb-6 font-medium border-l-4 border-blue-500 pl-6 italic">{section.lead}</p>
              )}
              {section.body && section.body.map((p, i) => (
                <p key={i} className="text-lg text-slate-700 leading-[1.8] mb-5">{p}</p>
              ))}
              {section.checklist && (
                <ul className="space-y-3 my-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  {section.checklist.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.afterChecklist && (
                <p className="text-lg text-slate-700 leading-[1.8] font-medium">{section.afterChecklist}</p>
              )}
            </div>
          ))}

          {/* Inline CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Ready to Talk?</p>
                <p className="text-lg font-semibold text-slate-900">Speak with a care coordinator today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-all whitespace-nowrap">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {post.related.length > 0 && (
            <div className="mt-16 pt-10 border-t-2 border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Reading</h3>
              <div className="space-y-3">
                {post.related.map(r => (
                  <Link key={r.slug} to={`/resources/${r.slug}`} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="flex-1 font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{r.title}</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Final CTA */}
      <section className="py-16 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Clarity. Get Support. Without Delay.</h2>
          <p className="text-white/80 text-lg mb-8">Early action prevents complications and brings stability to daily life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14434608684" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> Call +1 (443) 460-8684
            </a>
            <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Request Support
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
