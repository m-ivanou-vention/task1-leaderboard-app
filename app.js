const leaderboardRoot = document.querySelector('.leaderboard_2943a085');

const categoryMeta = {
  'Knowledge Sessions': {
    badgeClass: 'categoryTraining_2943a085',
    icon: 'graduation-cap',
  },
  'Live Workshops': {
    badgeClass: 'categoryDefault_2943a085',
    icon: 'presentation',
  },
  'Partner Outreach': {
    badgeClass: 'categoryCommunity_2943a085',
    icon: 'network',
  },
};

const dropdownConfig = [
  {
    key: 'year',
    label: 'All Years',
    options: ['All Years', '2026'],
    width: 120,
  },
  {
    key: 'quarter',
    label: 'All Quarters',
    options: ['All Quarters', 'Q1', 'Q2', 'Q3', 'Q4'],
    width: 120,
  },
  {
    key: 'category',
    label: 'All Categories',
    options: ['All Categories', 'Knowledge Sessions', 'Live Workshops', 'Partner Outreach'],
    width: 150,
  },
];

const employees = [
  makeEmployee('Aster Vale', 'Principal Learning Architect (NX.LAB.CORE)', [
    ['Signal Patterns Clinic', 'Knowledge Sessions', '2026-02-11', 48],
    ['System Maps for Fast Teams', 'Live Workshops', '2026-03-05', 64],
    ['Studio Bridge Forum', 'Partner Outreach', '2026-05-14', 32],
    ['Decision Loops Intensive', 'Knowledge Sessions', '2026-06-10', 48],
    ['Runtime Habits Workshop', 'Live Workshops', '2026-08-19', 64],
    ['Cross-Lab Mentor Session', 'Partner Outreach', '2026-10-07', 40],
    ['Adaptive Delivery Briefing', 'Knowledge Sessions', '2026-11-18', 48],
    ['Craft Systems Roundtable', 'Live Workshops', '2026-12-09', 64],
  ]),
  makeEmployee('Milo Hart', 'Senior Practice Composer (AT.SYS.FORGE)', [
    ['Mentor Mesh Open Hours', 'Partner Outreach', '2026-01-21', 32],
    ['Story-Driven Demos', 'Live Workshops', '2026-03-18', 64],
    ['Feedback Systems Primer', 'Knowledge Sessions', '2026-04-16', 48],
    ['North Star Office Hours', 'Knowledge Sessions', '2026-05-21', 48],
    ['Field Notes Exchange', 'Partner Outreach', '2026-07-02', 40],
    ['Prompting in Product Teams', 'Live Workshops', '2026-09-15', 64],
    ['Working Agreements Lab', 'Knowledge Sessions', '2026-11-05', 48],
  ]),
  makeEmployee('Nia Rowan', 'Lead Studio Navigator (ORB.PATH.SEED)', [
    ['Blueprint Review Series', 'Knowledge Sessions', '2026-02-03', 48],
    ['Partner Kickoff Playbook', 'Partner Outreach', '2026-03-25', 40],
    ['Hands-On Sprint Lab', 'Live Workshops', '2026-04-29', 64],
    ['Guide Rails Session', 'Knowledge Sessions', '2026-06-18', 48],
    ['Community Launch Desk', 'Partner Outreach', '2026-09-09', 40],
    ['Facilitation Mechanics', 'Live Workshops', '2026-10-21', 64],
  ]),
  makeEmployee('Theo March', 'Practice Systems Editor (VX.PULSE.LINE)', [
    ['Pattern Language Notes', 'Knowledge Sessions', '2026-01-13', 48],
    ['Workshop Rehearsal Circuit', 'Live Workshops', '2026-02-24', 64],
    ['Alliance Field Session', 'Partner Outreach', '2026-05-06', 40],
    ['Operating Cadence Review', 'Knowledge Sessions', '2026-07-22', 48],
    ['Open Demo Day', 'Live Workshops', '2026-09-30', 64],
    ['Builder Circle Exchange', 'Partner Outreach', '2026-12-03', 40],
  ]),
  makeEmployee('Iris Flint', 'Senior Enablement Cartographer (MN.ARC.VISTA)', [
    ['Journey Mapping Intro', 'Knowledge Sessions', '2026-01-29', 48],
    ['Delivery Signals Workshop', 'Live Workshops', '2026-04-08', 64],
    ['Studio Connector Session', 'Partner Outreach', '2026-06-24', 40],
    ['Healthy Handoffs Seminar', 'Knowledge Sessions', '2026-08-05', 48],
    ['Narrative Review Room', 'Live Workshops', '2026-11-12', 64],
  ]),
  makeEmployee('Pax Linden', 'Adaptive Programs Curator (GL.NOVA.HUB)', [
    ['Quarter Open Review', 'Knowledge Sessions', '2026-02-17', 48],
    ['Signals and Rituals', 'Live Workshops', '2026-03-31', 64],
    ['Partner Studio Sync', 'Partner Outreach', '2026-05-27', 40],
    ['Flow Clinic', 'Knowledge Sessions', '2026-09-01', 48],
    ['Practical Facilitation', 'Live Workshops', '2026-10-14', 64],
  ]),
  makeEmployee('Lena Quill', 'Learning Experience Conductor (AZ.WAVE.DECK)', [
    ['Context Windows Session', 'Knowledge Sessions', '2026-01-08', 48],
    ['Studio Practice Run', 'Live Workshops', '2026-04-22', 64],
    ['Alliance Launch Table', 'Partner Outreach', '2026-08-12', 40],
    ['Clarity by Design', 'Knowledge Sessions', '2026-10-06', 48],
  ]),
  makeEmployee('Soren Pike', 'Principal Workshop Mechanic (KT.RIDGE.FLOW)', [
    ['Working Memory Primer', 'Knowledge Sessions', '2026-02-26', 48],
    ['Prompt Design Live', 'Live Workshops', '2026-05-12', 64],
    ['Open Partner Roundtable', 'Partner Outreach', '2026-07-28', 40],
    ['Decision Archive Review', 'Knowledge Sessions', '2026-11-25', 48],
  ]),
  makeEmployee('Cora Bell', 'Practice Momentum Steward (SV.LOOM.FIELD)', [
    ['Guidepost Clinic', 'Knowledge Sessions', '2026-03-11', 48],
    ['Workspace Habits Workshop', 'Live Workshops', '2026-06-03', 64],
    ['Partner Readiness Session', 'Partner Outreach', '2026-09-23', 40],
  ]),
  makeEmployee('Jules Arden', 'Enablement Signal Designer (PR.CANVAS.SET)', [
    ['Pattern Feedback Desk', 'Knowledge Sessions', '2026-02-09', 48],
    ['Live Facilitation Lab', 'Live Workshops', '2026-07-08', 64],
    ['Bridge Builder Forum', 'Partner Outreach', '2026-10-29', 40],
  ]),
  makeEmployee('Mara Sol', 'Learning Programs Builder (UN.ATLAS.NEST)', [
    ['Session Flow Notes', 'Knowledge Sessions', '2026-03-03', 48],
    ['Hands-On Review Room', 'Live Workshops', '2026-08-26', 64],
  ]),
  makeEmployee('Rex Hollow', 'Senior Systems Storyteller (EQ.CIRCUIT.BAY)', [
    ['Signal Framing Brief', 'Knowledge Sessions', '2026-04-14', 48],
    ['Partner Relay Table', 'Partner Outreach', '2026-12-16', 40],
  ]),
  makeEmployee('Tara Wren', 'Learning Operations Partner (QD.FIELD.KITE)', [
    ['Foundations Sprint Brief', 'Knowledge Sessions', '2026-01-15', 48],
    ['Workshop Flight Check', 'Live Workshops', '2026-03-19', 64],
    ['Alliance Intake Circle', 'Partner Outreach', '2026-05-28', 40],
    ['Facilitator Notes Review', 'Knowledge Sessions', '2026-08-13', 48],
    ['Studio Demo Relay', 'Live Workshops', '2026-11-04', 64],
  ]),
  makeEmployee('Owen Pryce', 'Senior Capability Coach (LM.GRID.HARBOR)', [
    ['Delivery Compass Session', 'Knowledge Sessions', '2026-02-04', 48],
    ['Interactive Practice Lab', 'Live Workshops', '2026-04-17', 64],
    ['Partner Onboarding Table', 'Partner Outreach', '2026-06-26', 40],
    ['Signals Debrief Room', 'Knowledge Sessions', '2026-09-17', 48],
    ['Field Workshop Circuit', 'Live Workshops', '2026-12-10', 64],
  ]),
  makeEmployee('Vera North', 'Practice Delivery Steward (CX.TERRAIN.LOFT)', [
    ['Shared Vocabulary Clinic', 'Knowledge Sessions', '2026-01-30', 48],
    ['Scenario Rehearsal Desk', 'Live Workshops', '2026-05-07', 64],
    ['Partner Guide Exchange', 'Partner Outreach', '2026-07-16', 40],
    ['Enablement Review Notes', 'Knowledge Sessions', '2026-10-08', 48],
  ]),
  makeEmployee('Kian Mercer', 'Studio Learning Engineer (RD.MAPLE.FORUM)', [
    ['Context Primer Session', 'Knowledge Sessions', '2026-02-20', 48],
    ['Working Session Broadcast', 'Live Workshops', '2026-03-27', 64],
    ['Launch Partner Huddle', 'Partner Outreach', '2026-08-21', 40],
    ['Pattern Recall Clinic', 'Knowledge Sessions', '2026-09-11', 48],
    ['Practice Run Forum', 'Live Workshops', '2026-11-26', 64],
  ]),
  makeEmployee('Dahlia Frost', 'Principal Workshop Curator (ST.ATLAS.COVE)', [
    ['Mentor Rhythm Session', 'Knowledge Sessions', '2026-01-09', 48],
    ['Hands-On Builder Hour', 'Live Workshops', '2026-04-02', 64],
    ['Regional Partner Desk', 'Partner Outreach', '2026-06-11', 40],
    ['Guidebook Improvement Review', 'Knowledge Sessions', '2026-08-27', 48],
    ['Live Systems Debrief', 'Live Workshops', '2026-10-15', 64],
    ['Open Alliance Circle', 'Partner Outreach', '2026-12-17', 40],
  ]),
  makeEmployee('Bram Sloane', 'Learning Platform Lead (UV.ORBIT.FORGE)', [
    ['Session Notes Exchange', 'Knowledge Sessions', '2026-03-06', 48],
    ['Instructor Simulation Lab', 'Live Workshops', '2026-05-20', 64],
    ['Partner Discovery Window', 'Partner Outreach', '2026-07-30', 40],
    ['Operating Signals Review', 'Knowledge Sessions', '2026-10-29', 48],
  ]),
  makeEmployee('Lyra Finch', 'Enablement Programs Analyst (NB.CANOPY.TRACK)', [
    ['Quarter Guide Session', 'Knowledge Sessions', '2026-02-12', 48],
    ['Workshop Pattern Review', 'Live Workshops', '2026-06-09', 64],
    ['Partner Liaison Room', 'Partner Outreach', '2026-09-03', 40],
    ['Practice Health Check', 'Knowledge Sessions', '2026-11-19', 48],
  ]),
  makeEmployee('Quinn Hale', 'Studio Community Architect (JR.SIGNAL.DOCK)', [
    ['Blueprint Reading Circle', 'Knowledge Sessions', '2026-01-22', 48],
    ['Facilitation Replay Lab', 'Live Workshops', '2026-04-24', 64],
    ['Alliance Feedback Table', 'Partner Outreach', '2026-07-01', 40],
    ['Guidepost Review Forum', 'Knowledge Sessions', '2026-09-24', 48],
    ['Builder Showcase Session', 'Live Workshops', '2026-12-01', 64],
  ]),
  makeEmployee('Esme Calder', 'Senior Training Systems Partner (FH.RADIUS.NOTE)', [
    ['Onboarding Signals Intro', 'Knowledge Sessions', '2026-03-12', 48],
    ['Live Enablement Studio', 'Live Workshops', '2026-05-13', 64],
    ['Partner Planning Forum', 'Partner Outreach', '2026-08-06', 40],
    ['Practice Archive Review', 'Knowledge Sessions', '2026-11-10', 48],
  ]),
  makeEmployee('Noah Voss', 'Capability Programs Designer (TK.PIVOT.BRIDGE)', [
    ['Signals Primer Office Hour', 'Knowledge Sessions', '2026-02-18', 48],
    ['Workshop Systems Walkthrough', 'Live Workshops', '2026-06-30', 64],
    ['Alliance Contact Desk', 'Partner Outreach', '2026-10-01', 40],
    ['Learning Review Board', 'Knowledge Sessions', '2026-12-08', 48],
  ]),
  makeEmployee('Piper Ash', 'Enablement Experience Lead (YL.STUDIO.TIDE)', [
    ['Shared Practices Clinic', 'Knowledge Sessions', '2026-01-28', 48],
    ['Interactive Sprint Broadcast', 'Live Workshops', '2026-03-10', 64],
    ['Partner Warmup Session', 'Partner Outreach', '2026-05-05', 40],
    ['Pattern Coaching Review', 'Knowledge Sessions', '2026-08-20', 48],
    ['Live Facilitation Exchange', 'Live Workshops', '2026-11-24', 64],
  ]),
  makeEmployee('Felix Rowan', 'Practice Engagement Specialist (HD.CREST.NEXUS)', [
    ['Guiderail Primer', 'Knowledge Sessions', '2026-04-09', 48],
    ['Workshop Debug Session', 'Live Workshops', '2026-07-14', 64],
    ['Alliance Listening Post', 'Partner Outreach', '2026-09-29', 40],
    ['Capability Signals Forum', 'Knowledge Sessions', '2026-12-15', 48],
  ]),
];

const state = {
  year: 'All Years',
  quarter: 'All Quarters',
  category: 'All Categories',
  search: '',
  openDropdown: null,
  expandedEmployeeId: null,
};

function makeEmployee(name, role, activities) {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    role,
    activities: activities.map(([title, category, date, points]) => ({
      title,
      category,
      date,
      points,
    })),
  };
}

function icon(name) {
  const icons = {
    chevronDown: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevronUp: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    search: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5L14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    star: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.6l1.9 3.86 4.26.62-3.08 3 0.73 4.25L8 11.3l-3.81 2.03 0.73-4.25-3.08-3 4.26-.62L8 1.6z" fill="currentColor"/></svg>',
    presentation: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.5" y="2.5" width="11" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 9.5v4M5.5 13.5h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5 7l1.8-1.8L8.5 7 11 4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'graduation-cap': '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 6.2L8 3l6.5 3.2L8 9.4 1.5 6.2z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M4 7.4v2.2c0 .8 1.8 1.9 4 1.9s4-1.1 4-1.9V7.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M14.5 6.4v3.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    network: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="3.5" cy="8" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12.5" cy="4" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12.5" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M5.3 7.2l5.2-2.3M5.3 8.8l5.2 2.3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  };

  return icons[name] || icons.star;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getQuarter(dateString) {
  const month = new Date(dateString).getUTCMonth();
  return `Q${Math.floor(month / 3) + 1}`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(dateString));
}

function getFilteredEmployees() {
  return employees
    .map((employee) => {
      const filteredActivities = employee.activities.filter((activity) => {
        const yearMatch = state.year === 'All Years' || activity.date.startsWith(state.year);
        const quarterMatch = state.quarter === 'All Quarters' || getQuarter(activity.date) === state.quarter;
        const categoryMatch = state.category === 'All Categories' || activity.category === state.category;
        return yearMatch && quarterMatch && categoryMatch;
      });

      const total = filteredActivities.reduce((sum, activity) => sum + activity.points, 0);
      const stats = Object.values(
        filteredActivities.reduce((accumulator, activity) => {
          if (!accumulator[activity.category]) {
            accumulator[activity.category] = {
              category: activity.category,
              count: 0,
              points: 0,
            };
          }

          accumulator[activity.category].count += 1;
          accumulator[activity.category].points += activity.points;
          return accumulator;
        }, {})
      );

      return {
        ...employee,
        filteredActivities: filteredActivities.sort((left, right) => new Date(right.date) - new Date(left.date)),
        stats,
        total,
      };
    })
    .filter((employee) => employee.filteredActivities.length > 0)
    .filter((employee) => employee.name.toLowerCase().includes(state.search.toLowerCase().trim()))
    .sort((left, right) => right.total - left.total || left.name.localeCompare(right.name))
    .map((employee, index) => ({ ...employee, rank: index + 1 }));
}

function renderDropdown({ key, options, width }) {
  const selected = state[key];
  const isOpen = state.openDropdown === key;
  const rootClass = key === 'category' ? 'root-190' : 'root-170';

  return `
    <div class="ms-Dropdown-container ${rootClass}" style="width:${width}px">
      <div
        class="ms-Dropdown dropdown-171"
        data-dropdown="${key}"
        role="combobox"
        aria-expanded="${isOpen ? 'true' : 'false'}"
        aria-haspopup="listbox"
        aria-controls="${key}-listbox"
        tabindex="0"
        style="width:${width}px"
      >
        <span class="ms-Dropdown-title title-202">${escapeHtml(selected)}</span>
        <span class="ms-Dropdown-caretDownWrapper caretDownWrapper-173"><i class="ms-Dropdown-caretDown caretDown-189">${icon('chevronDown')}</i></span>
      </div>
      ${isOpen ? `
        <ul class="ms-Dropdown-items_2943a085" id="${key}-listbox" role="listbox">
          ${options
            .map(
              (option) => `
                <li
                  class="ms-Dropdown-item_2943a085"
                  data-dropdown-option="${key}"
                  data-value="${escapeHtml(option)}"
                  role="option"
                  aria-selected="${option === selected ? 'true' : 'false'}"
                >${escapeHtml(option)}</li>`
            )
            .join('')}
        </ul>`
        : ''}
    </div>`;
}

function renderPodium(employeesForView) {
  const podiumRanks = [2, 1, 3]
    .map((rank) => employeesForView.find((employee) => employee.rank === rank))
    .filter(Boolean);

  return `
    <div class="podium_2943a085">
      ${podiumRanks
        .map(
          (employee) => `
            <div class="podiumColumn_2943a085 podiumRank${employee.rank}_2943a085">
              <div class="podiumUser_2943a085">
                <div class="podiumAvatarContainer_2943a085">
                  <div class="podiumAvatar_2943a085"><span>${escapeHtml(initials(employee.name))}</span></div>
                  <div class="podiumRankBadge_2943a085">${employee.rank}</div>
                </div>
                <h3 class="podiumName_2943a085">${escapeHtml(employee.name)}</h3>
                <p class="podiumRole_2943a085">${escapeHtml(employee.role)}</p>
                <div class="podiumScore_2943a085"><i class="root-257">${icon('star')}</i><span>${employee.total}</span></div>
              </div>
              <div class="podiumBlock_2943a085">
                <div class="podiumBlockTop_2943a085"></div>
                <span class="podiumRankNumber_2943a085">${employee.rank}</span>
              </div>
            </div>`
        )
        .join('')}
    </div>`;
}

function renderStats(stats) {
  return stats
    .map((stat) => `
      <div class="ms-TooltipHost root-258" role="none">
        <div class="categoryStat_2943a085">
          <i class="categoryStatIcon_2943a085 root-257">${icon(categoryMeta[stat.category]?.icon)}</i>
          <span class="categoryStatCount_2943a085">${stat.count}</span>
        </div>
        <div hidden>${escapeHtml(stat.category)}</div>
      </div>`)
    .join('');
}

function renderDetails(employee) {
  return `
    <div class="details_2943a085">
      <h4 class="detailsTitle_2943a085">Recent Activity</h4>
      <div class="tableWrapper_2943a085">
        <table class="activityTable_2943a085">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Category</th>
              <th>Date</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            ${employee.filteredActivities
              .map((activity) => `
                <tr>
                  <td class="activityName_2943a085">${escapeHtml(activity.title)}</td>
                  <td><span class="categoryBadge_2943a085 ${categoryMeta[activity.category]?.badgeClass || 'categoryDefault_2943a085'}">${escapeHtml(activity.category)}</span></td>
                  <td class="activityDate_2943a085">${formatDate(activity.date)}</td>
                  <td class="activityPoints_2943a085">+${activity.points}</td>
                </tr>`)
              .join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function renderRows(employeesForView) {
  if (employeesForView.length === 0) {
    return '<div class="emptyState_2943a085">No employees match the current filters.</div>';
  }

  return `
    <div class="list_2943a085">
      ${employeesForView
        .map((employee) => {
          const expanded = state.expandedEmployeeId === employee.id;
          return `
            <div class="userRowContainer_2943a085 ${expanded ? 'expanded_2943a085' : ''}">
              <div class="row_2943a085">
                <div class="rowMain_2943a085">
                  <div class="rowLeft_2943a085">
                    <span class="rank_2943a085">${employee.rank}</span>
                    <div class="avatar_2943a085">${escapeHtml(initials(employee.name))}</div>
                    <div class="info_2943a085">
                      <h3 class="name_2943a085">${escapeHtml(employee.name)}</h3>
                      <span class="role_2943a085">${escapeHtml(employee.role)}</span>
                    </div>
                  </div>
                  <div class="rowRight_2943a085">
                    <div class="categoryStats_2943a085">${renderStats(employee.stats)}</div>
                    <div class="totalSection_2943a085">
                      <span class="totalLabel_2943a085">TOTAL</span>
                      <div class="score_2943a085"><i class="root-257">${icon('star')}</i><span>${employee.total}</span></div>
                    </div>
                    <button class="expandButton_2943a085" data-expand="${employee.id}" aria-label="${expanded ? 'Collapse' : 'Expand'}">
                      <i class="root-257">${icon(expanded ? 'chevronUp' : 'chevronDown')}</i>
                    </button>
                  </div>
                </div>
              </div>
              ${expanded ? renderDetails(employee) : ''}
            </div>`;
        })
        .join('')}
    </div>`;
}

function render() {
  const employeesForView = getFilteredEmployees();
  const topThree = employeesForView.slice(0, 3);

  if (!employeesForView.some((employee) => employee.id === state.expandedEmployeeId)) {
    state.expandedEmployeeId = null;
  }

  leaderboardRoot.innerHTML = `
    <header class="header_2943a085">
      <div class="headerContent_2943a085">
        <h2>Leaderboard</h2>
        <p>Top performers based on contributions and activity</p>
      </div>
    </header>
    <div class="filterBar_2943a085">
      <div class="filters_2943a085">
        ${dropdownConfig.map(renderDropdown).join('')}
      </div>
      <div class="search_2943a085">
        <div class="ms-SearchBox root-191">
          <div class="ms-SearchBox-iconContainer iconContainer-192"><i class="ms-SearchBox-icon icon-196">${icon('search')}</i></div>
          <input class="ms-SearchBox-field field-195" id="leaderboard-search" name="leaderboard-search" type="search" role="searchbox" placeholder="Search employee..." value="${escapeHtml(state.search)}" />
        </div>
      </div>
    </div>
    ${topThree.length ? renderPodium(topThree) : ''}
    ${renderRows(employeesForView)}`;
}

function handleClick(event) {
  const dropdown = event.target.closest('[data-dropdown]');
  if (dropdown) {
    const key = dropdown.dataset.dropdown;
    state.openDropdown = state.openDropdown === key ? null : key;
    render();
    return;
  }

  const option = event.target.closest('[data-dropdown-option]');
  if (option) {
    state[option.dataset.dropdownOption] = option.dataset.value;
    state.openDropdown = null;
    render();
    return;
  }

  const expandButton = event.target.closest('[data-expand]');
  if (expandButton) {
    const employeeId = expandButton.dataset.expand;
    state.expandedEmployeeId = state.expandedEmployeeId === employeeId ? null : employeeId;
    render();
    return;
  }

  if (!state.openDropdown) {
    return;
  }

  if (!event.target.closest('.ms-Dropdown-container')) {
    state.openDropdown = null;
    render();
  }
}

function handleInput(event) {
  if (event.target.matches('.ms-SearchBox-field.field-195')) {
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    state.search = event.target.value;
    render();

    const nextInput = document.querySelector('.ms-SearchBox-field.field-195');
    if (nextInput) {
      nextInput.focus();
      if (selectionStart !== null && selectionEnd !== null) {
        nextInput.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }
}

function handleKeydown(event) {
  const dropdown = event.target.closest('[data-dropdown]');
  if (dropdown && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    dropdown.click();
  }

  if (event.key === 'Escape' && state.openDropdown) {
    state.openDropdown = null;
    render();
  }
}

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('keydown', handleKeydown);

render();