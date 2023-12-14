type Task = string;

type Job = {
  title: string;
  company: string;
  dates: string;
  tasks: Task[];
};

const resume: Job[] = [
  {
    title: 'CONTENT DEVELOPER/COPYWRITER',
    company: '',
    dates: 'March 2020 - Present',
    tasks: [
      'Provide social media management and copywriting in various capacities, including for solopreneur and enterprise clients.',
      'Create social media content including posts, graphics, audiograms, reels, and blog.',
      'Develop copy for Google ads, landing pages, and emails.',
    ],
  },
  {
    title: 'HEAD OF CONTENT & COMMUNICATIONS',
    company: 'CleanRobotics',
    dates: 'November 2022 - Present',

    tasks: [
      'Management of all outbound marketing content and copy, including social media, email newsletters, and blog.',
      'Copywriting for social media posts, case studies, white papers, articles, and landing pages.',
      'Support for organizational priorities, e.g., investor deck slides, sales collateral, grant and award applications.',
      'Press release creation, outreach, and community management.',
    ],
  },
  {
    title: 'GUEST EXPERIENCE LEAD/OPERATIONS',
    company: 'Vacation With An Artist',
    dates: 'Contracted May 2022 - Sept 2022',

    tasks: [
      'Managed all guest-related inquiries, leads, and bookings.',
      'Managed guest experience from lead stage to completion.',
      'Gathered guest feedback and utilized UGC to support marketing and sales initiatives.',
      'Workshopped product updates and resolved operational inefficiencies.',
    ],
  },
  {
    title: 'LEAD ACCOUNT MANAGER/SOCIAL MEDIA MANAGER',
    company: 'Interview Valet',
    dates: 'Feb 2020 - May 2022',

    tasks: [
      'Onboarded and provided support for a batch of 15-25 clients, ensuring team efforts aligned with client goals for podcast appearances.',
      'Prospected and vetted podcasts to ensure brand affinity; facilitated interview scheduling and logistics. Prepped clients for each interview.',
      'Conducted optimization sessions with clients and secured retention in line with team goals.',
      'Managed company social media channels. Coordinated campaigns and content; co-hosted monthly webinars.',
    ],
  },
];

const Resume = () => {
  return (
    <div className="bg-white p-6 flex justify-center">
      <div>
        <div className="text-3xl mb-7 font-bold">Experience</div>
        {resume.map((job: Job) => {
          return (
            <div>
              <h2 className="text-xl font-bold mt-4">{job.title}</h2>
              <p className="text-gray-600 text-lg my-2">
                {job.company.length ? `${job.company} |` : ''} {job.dates}
              </p>
              {job.tasks.map((task: Task) => {
                return <div>• {task}</div>;
              })}
            </div>
          );
        })}

        <div className="flex justify-center">
          <button className="text-xl xl:text-2xl xl:mt-10 mt-5 outline  outline-offset-4 outline-gray-400 p-2">
            <a target="_blank" href="/public/RWhitenerResume2024.pdf" rel="noreferrer">
              <div className="send-button font-weight-light pointer">View full Resume</div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
