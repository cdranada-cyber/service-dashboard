export default function App() {
  const sections = [
    {
      title: "Le Price Links & Forms",
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          name: "Service Department Master File",
          link: "https://leprice-my.sharepoint.com/:x:/g/personal/vmdoblon_leprice_onmicrosoft_com/EabeCcieAe5CkuLntbI2ppgBYaIGtKP0QLvTN7ppx9N3ig?rtime=YN-ISb0h3kg",
        },
        {
          name: "Service Department Calendar",
          link: "https://docs.google.com/spreadsheets/d/1o7qlfR10NaicVMP3jExj5rpg_KGnCsW1pCta4HJ3Aps/edit?gid=1833898200#gid=1833898200",
        },
      ],
    },
    {
      title: "Team Attendance",
      color: "from-emerald-500 to-green-600",
      items: [
        {
          name: "Luzon Attendance",
          link: "https://docs.google.com/spreadsheets/d/1nBn069a0puRuzPGYXooSDloZigPVrdSz_g2F7ZqW_zU/edit?gid=1083675179#gid=1083675179",
        },
        {
          name: "Semirara Attendance",
          link: "https://docs.google.com/spreadsheets/d/1hmaBwqvwhe0CGvFIyxfoSqAAP7fvjtUbXq1TPiMJuwE/edit?gid=1122577943#gid=1122577943",
        },
        {
          name: "CCC Attendance",
          link: "https://docs.google.com/spreadsheets/d/1u-nIqfqQTCRMSLyo_qjAKsuEIrE7mWg7hjLj0kbBMaw/edit?gid=129623941#gid=129623941",
        },
      ],
    },
    {
      title: "Monitoring",
      color: "from-orange-500 to-amber-600",
      items: [
        {
          name: "2026 Monitoring (Proposal & TARF TAT)",
          link: "https://docs.google.com/spreadsheets/d/17YDDZcIIIWqR_Hbf5zLUU5I7s2njc3Lkm9sSLNmhmBw/edit?gid=819787714#gid=819787714",
        },
        {
          name: "SPI/CPI Monitoring",
          link: "https://docs.google.com/spreadsheets/d/1PRPgbYmrmHjMteF6BGDh34V-LxOGXc6zwrV0OcZyras/edit?gid=913845790#gid=913845790",
        },
        {
          name: "TARF - Service Response",
          link: "https://docs.google.com/spreadsheets/d/1f3urBCLCy9mLzCIjYewTEus1MECrDF0Qi71JCt0lmmI/edit?gid=2054228129#gid=2054228129",
        },
        {
          name: "On-site Service Details (Filing)",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScxFJOwZnck2eo2HTh9eWw6t7AmOB2diSrmUhLJ_7gX7PCNGQ/viewform?usp=dialog",
        },
        {
          name: "On-site Service Details (Response)",
          link: "https://drive.google.com/drive/folders/1vfg01X_DJdGi-EnoaPgkiaJXZtLe0KHFm7AJa4i26h6lGaQn72yjEwdnZUzi9Ecp7048MSKr?usp=sharing",
        },
        {
          name: "Pending Inquiries From Cx",
          link: "https://leprice.sharepoint.com/:x:/r/sites/LPIDEPARTMENTHUB/_layouts/15/Doc.aspx?sourcedoc=%7B1F551611-E874-4728-9174-5882F344A355%7D&file=Pending%20Inquiries.xlsx&fromShare=true&action=default&mobileredirect=true",
        },
      ],
    },
    {
      title: "Evaluation",
      color: "from-purple-500 to-fuchsia-600",
      items: [
        {
          name: "Cadet 1-3-5 Competency",
          link: "https://docs.google.com/spreadsheets/d/1OsMzzJwA9CRBis3GtoWn3XHwFTjeqS3hTrOQY4DfuGg/edit?gid=192379742#gid=192379742",
        },
        {
          name: "ASE/AST Competency",
          link: "https://docs.google.com/spreadsheets/d/1n9B_Zdi2jfKbshtEyeb6EUnhVJiPBytFowMPKMZ-a2I/edit?gid=192379742#gid=192379742",
        },
      ],
    },
  ];

  const quickStats = [
    { label: "Departments", value: "4" },
    { label: "Active Monitoring Tools", value: "6" },
    { label: "Attendance Trackers", value: "3" },
    { label: "Evaluation Systems", value: "2" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Service Department Dashboard 2026
              </h1>
              <p className="text-slate-300 text-lg">
                Centralized access for monitoring, attendance, evaluations, and service operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200"
            >
              <div className={`bg-gradient-to-r ${section.color} p-5`}>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              <div className="p-5 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 bg-slate-50 hover:bg-white"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 truncate max-w-xs">
                        Click to open resource
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium group-hover:scale-105 transition-transform">
                      Open
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Operational Notes
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="text-lg font-semibold text-slate-800 mb-2">
                Attendance Monitoring
              </div>
              <p className="text-sm text-slate-600">
                Track manpower deployment, team schedules, and field attendance records.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="text-lg font-semibold text-slate-800 mb-2">
                Service Monitoring
              </div>
              <p className="text-sm text-slate-600">
                Monitor TARF response, SPI/CPI metrics, and pending customer inquiries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="text-lg font-semibold text-slate-800 mb-2">
                Competency Evaluation
              </div>
              <p className="text-sm text-slate-600">
                Review technician competencies and cadet development progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
