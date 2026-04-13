import { useParams, Link, Navigate } from 'react-router-dom'
import { Phone, ArrowLeft, ArrowRight, Calendar, BookOpen, Clock } from 'lucide-react'
import { useFormModal } from '../context/FormModalContext'
import { useEffect } from 'react'
import img85 from '../assets/images/85.png'
import img84 from '../assets/images/84.png'

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
          `For those in Towson, Baltimore County, and surrounding Maryland areas, having access to professional in-home care means the transition from hospital to home doesn't have to rely on improvisation. It can be structured, monitored, and steady.`,
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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
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
