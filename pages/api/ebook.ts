import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

type EbookPage = {
  title: string;
  subtitle: string;
  narrative: string;
  keyPoints: string[];
  metrics: string;
  experiment: string;
  callToAction: string;
};

const moduleThemes = [
  'Lifecycle Automation',
  'Revenue Intelligence',
  'Demand Generation',
  'Content Velocity',
  'Product-Led Growth',
  'Community Flywheels',
  'ABM Precision',
  'Retention Architecture',
  'Partner Ecosystems',
  'Paid Media Orchestration',
];

const channelAngles = [
  'multi-channel nurture streams',
  'AI-enabled prospecting cadences',
  'conversion-optimized landing hubs',
  'multi-touch attribution models',
  'accelerated webinar launches',
  'search intent capture loops',
  'creativity-led social campaigns',
  'real-time personalization engines',
  'predictive churn interceptors',
  'account-based engagement kits',
];

const personaSegments = [
  'modern revenue leaders',
  'technical founders',
  'operations strategists',
  'growth product managers',
  'mid-market CMOs',
  'enterprise innovation teams',
  'marketplace operators',
  'customer success architects',
  'B2B influencer partners',
  'subscription-led marketers',
];

const automationFocus = [
  'behavior-triggered journeys',
  'progressive profiling tactics',
  'AI-generated personalization',
  'smart branching logic',
  'data enrichment playbooks',
  'self-optimizing cadences',
  'predictive scoring models',
  'cross-channel retargeting',
  'alerts for risk mitigation',
  'product signals activation',
];

const creativeMotifs = [
  'story-driven sequences',
  'interactive dashboards',
  'animated explainers',
  'modular storytelling blocks',
  'visual narrative frameworks',
  'data storyboard sprints',
  'immersive microsite flows',
  'high-velocity video ads',
  'signature webinar worlds',
  'community storytelling arcs',
];

const kpiFocus = [
  'pipeline velocity',
  'qualified pipeline contribution',
  'time-to-value',
  'expansion ARR',
  'retention lift',
  'demo volume',
  'lead to SQL conversion',
  'win rate growth',
  'referral sourced revenue',
  'activation success index',
];

const experimentIdeas = [
  'introduce a predictive incentive surfaced by AI-driven propensity scoring and run a challenger variant for seven days.',
  'launch a multi-step onboarding walkthrough that dynamically swaps content modules when engagement drops.',
  'pilot creative swaps inside the hero section across three personas and redistribute budget toward the winner every 48 hours.',
  'instrument heat, rage, and scroll maps into a KPI cockpit that triggers automated CRO tasks inside the sprint board.',
  'merge product usage and campaign response data to surface a real-time opportunity queue for sales development.',
  'spin up a micro-community sprint with curated AMAs and benchmark exchanges to convert followers into SQLs.',
  'build a predictive churn radar using enriched firmographic models and escalate risky accounts to lifecycle squads.',
  'layer a reverse trial experience onto the pricing page using triggered in-app modals and follow-up emails.',
  'deploy a partner-led ABM blitz with co-branded landing pages and orchestrated nurture tracks.',
  'launch a rolling webinar studio format with episodic storytelling, segment-specific offers, and rapid post-show sequences.',
];

const ctaAngles = [
  'Activate the campaign cockpit template to start orchestrating the strategy in under an hour.',
  'Copy the lifecycle canvas into your workspace and prioritize the quick-win experiments today.',
  'Bring the intelligence dashboard online and align your revenue teams around shared KPIs.',
  'Clone the resource stack checklist to ensure tooling gaps are eliminated before launch.',
  'Adapt the creative blueprint and distribute the narrative across every owned and paid channel.',
  'Use the sprint retro questions to catalogue insights and inform the next iteration immediately.',
  'Plug the ABM scoring model into your CRM to focus attention on the right accounts.',
  'Integrate the retention monitors with product analytics to catch churn risk hours earlier.',
  'Apply the experimentation rubric to guarantee statistical rigor and confident decision making.',
  'Download the analytics glossary to keep cross-functional teams aligned on definitions.',
];

const paragraph = (
  theme: string,
  channel: string,
  persona: string,
  automation: string,
  creative: string,
  kpi: string,
): string =>
  `This playbook orchestrates ${channel} to engage ${persona} while reinforcing ${theme.toLowerCase()}. Focus on ${automation} and ${creative} to accelerate ${kpi}. Blend qualitative research with performance telemetry to build messaging that speaks directly to urgent pains and emerging aspirations.`;

const supportingParagraph = (
  persona: string,
  automation: string,
  creative: string,
): string =>
  `Operationalize the experience with ${automation} layered onto ${creative}. Equip pods with enablement snapshots so every collaborator understands why the journey resonates for ${persona}. Anchor reporting to north-star metrics while capturing directional signals from rapid tests.`;

const buildPages = (): EbookPage[] =>
  Array.from({ length: 80 }, (_, index) => {
    const theme = moduleThemes[index % moduleThemes.length];
    const channel = channelAngles[(index * 3) % channelAngles.length];
    const persona = personaSegments[(index * 5) % personaSegments.length];
    const automation = automationFocus[(index * 7) % automationFocus.length];
    const creative = creativeMotifs[(index * 2) % creativeMotifs.length];
    const kpi = kpiFocus[(index * 4) % kpiFocus.length];

    const keyPoints = [
      `Prioritize ${channel} with playbooks that serve ${persona}.`,
      `Reinforce positioning through ${creative} and a consistent narrative arc.`,
      `Operationalize ${automation} to keep journeys responsive and contextual.`,
      `Instrument measurement around ${kpi} to communicate business value.`,
      `Scale collaboration with cross-functional rituals and shared dashboards.`,
    ];

    return {
      title: `Module ${index + 1}: ${theme} Launch System`,
      subtitle: `Blueprint ${index + 1} · ${channel}`,
      narrative: `${paragraph(theme, channel, persona, automation, creative, kpi)} ${supportingParagraph(
        persona,
        automation,
        creative,
      )}`,
      keyPoints,
      metrics: `North-star KPI · ${kpi.toUpperCase()}`,
      experiment: experimentIdeas[index % experimentIdeas.length],
      callToAction: ctaAngles[(index * 6) % ctaAngles.length],
    };
  });

type PdfDoc = InstanceType<typeof PDFDocument>;

const drawScreenMock = (doc: PdfDoc, top: number) => {
  const left = 70;
  const width = 400;
  const height = 170;

  doc.save();
  doc.roundedRect(left, top, width, height, 14).lineWidth(1.5).stroke('#3f5570');
  doc.roundedRect(left, top, width, 34, 14).fill('#3f5570');
  doc.fillColor('#f6f7fb').roundedRect(left + 16, top + 48, width - 32, 44, 10).fill();
  doc.fillColor('#ef8354').roundedRect(left + 16, top + 104, width - 180, 26, 8).fill();
  doc.fillColor('#ffffff').roundedRect(left + width - 140, top + 104, 124, 26, 8).fill();

  const barLeft = left + 20;
  const barBottom = top + height - 32;
  const barWidth = 18;
  const barGap = 14;
  const barHeights = [60, 88, 48, 102, 76];
  barHeights.forEach((barHeight, i) => {
    const x = barLeft + i * (barWidth + barGap);
    doc.fillColor('#8fb4ff').roundedRect(x, barBottom - barHeight, barWidth, barHeight, 4).fill();
  });

  doc.moveTo(left + 20, top + height - 64);
  doc.lineTo(left + 100, top + height - 94);
  doc.lineTo(left + 180, top + height - 70);
  doc.lineTo(left + 260, top + height - 112);
  doc.lineTo(left + 340, top + height - 80);
  doc.stroke('#ef8354');
  doc.restore();
};

const drawChecklist = (doc: PdfDoc, yStart: number, checklist: string[]) => {
  let y = yStart;
  checklist.forEach((item) => {
    doc.roundedRect(70, y, 12, 12, 3).stroke('#3f5570');
    doc.text(item, 88, y - 2, {
      width: 470,
      align: 'left',
    });
    y += 18;
  });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const doc = new PDFDocument({
    size: 'LETTER',
    margin: 56,
    info: {
      Title: 'Digital Marketing Blueprint',
      Author: 'Agentic Marketing Studio',
      Subject: '80-page digital marketing product playbook',
      Keywords: 'digital marketing, ebook, growth, automation, demand generation',
    },
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="digital-marketing-blueprint.pdf"');
  res.setHeader('Cache-Control', 'no-store');

  const pages = buildPages();

  doc.pipe(res);

  pages.forEach((page, index) => {
    if (index > 0) {
      doc.addPage();
    }

    doc.fillColor('#1b263b').font('Helvetica-Bold').fontSize(20);
    doc.text(page.title, { width: 480 });

    doc.moveDown(0.3);
    doc.font('Helvetica').fontSize(12).fillColor('#3f5570');
    doc.text(page.subtitle, { width: 480 });

    doc.moveDown(1);
    doc.font('Times-Roman').fontSize(11).fillColor('#2f3b52');
    doc.text(page.narrative, {
      width: 480,
      lineGap: 2,
    });

    doc.moveDown(0.8);
    doc.font('Helvetica-Bold').fontSize(12).fillColor('#1b263b');
    doc.text('Key Moves', { underline: true });

    doc.moveDown(0.4);
    doc.font('Helvetica').fontSize(11).fillColor('#2f3b52');
    page.keyPoints.forEach((bullet) => {
      doc.text(`• ${bullet}`, {
        width: 480,
        lineGap: 2,
      });
    });

    const mockTop = doc.y + 14;
    drawScreenMock(doc, mockTop);

    const checklistStart = mockTop + 190;
    doc.font('Helvetica-Bold').fontSize(12).fillColor('#1b263b');
    doc.text('Implementation Checklist', 70, checklistStart, {
      width: 480,
    });

    doc.font('Helvetica').fontSize(10).fillColor('#2f3b52');
    const checklist = [
      `Align teams on ${page.metrics.toLowerCase()} and define measurement cadences.`,
      `Configure ${automationFocus[(index * 7) % automationFocus.length].toLowerCase()} inside the active tool stack.`,
      `Ship creative assets highlighting ${creativeMotifs[(index * 2) % creativeMotifs.length].toLowerCase()}.`,
      `Enable data syncs that feed insight back into ${moduleThemes[index % moduleThemes.length].toLowerCase()}.`,
      `Schedule experiment: ${page.experiment}`,
    ];
    drawChecklist(doc, checklistStart + 22, checklist);

    doc.font('Helvetica-Bold').fontSize(11).fillColor('#3f5570');
    doc.text(page.metrics, 70, checklistStart + 138, {
      width: 220,
    });

    doc.font('Helvetica').fontSize(10).fillColor('#2f3b52');
    doc.text(`Featured Experiment · ${page.experiment}`, 70, checklistStart + 156, {
      width: 480,
      lineGap: 2,
    });

    doc.font('Helvetica-Bold').fontSize(11).fillColor('#ef8354');
    doc.text(page.callToAction, 70, checklistStart + 198, {
      width: 480,
      lineGap: 2,
    });

    doc.font('Helvetica').fontSize(9).fillColor('#3f5570');
    doc.text(`Page ${index + 1} of ${pages.length}`, 56, doc.page.height - 56, {
      width: doc.page.width - 112,
      align: 'right',
    });
  });

  doc.end();
}
