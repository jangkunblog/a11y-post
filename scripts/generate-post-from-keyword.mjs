import { access, appendFile, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

function getArg(name, fallback = "") {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return fallback;
  }

  return process.argv[index + 1] ?? fallback;
}

function parseBoolean(value, fallback) {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  return /^(1|true|yes|y)$/i.test(String(value));
}

function toSeoulParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);

  const map = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      map[part.type] = part.value;
    }
  }

  return {
    year: map.year,
    month: map.month,
    day: map.day,
    hour: map.hour,
    minute: map.minute,
    second: map.second
  };
}

function slugifyKeyword(keyword) {
  const normalized = keyword
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  return normalized || "keyword-post";
}

function keywordHash(keyword) {
  return createHash("sha1").update(keyword).digest("hex").slice(0, 8);
}

function keywordSlugToken(keyword) {
  const normalized = slugifyKeyword(keyword);
  if (normalized !== "keyword-post") {
    return normalized;
  }

  return `keyword-${keywordHash(keyword)}`;
}

function yamlString(value) {
  return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function cleanupTags(tags, keyword) {
  const cleaned = Array.isArray(tags)
    ? tags
        .map((tag) => String(tag).trim().toLowerCase())
        .filter((tag) => tag.length > 0)
        .slice(0, 6)
    : [];

  if (cleaned.length > 0) {
    return [...new Set(cleaned)];
  }

  return ["a11y", "frontend", "keyword", keywordSlugToken(keyword)].slice(0, 4);
}

function fallbackPayload(keyword) {
  return {
    title: `${keyword} 완전 가이드: 개념, 표준, 사용법, 이슈까지`,
    description: `${keyword}의 개념 정의부터 표준 근거, 올바른 사용법, 잘못된 사례, 검수 방법까지 실무 관점으로 정리한 상세 가이드이다.`,
    tags: ["a11y", "frontend", "insight", keywordSlugToken(keyword)],
    body: [
      `## ${keyword}를 지금 다시 정의해야 하는 이유`,
      "",
      `${keyword}는 보통 기능 하나를 소개하는 주제로 소비되지만, 실무에서는 사용자 경험과 운영 구조를 동시에 흔드는 변수로 작동한다. 그래서 처음부터 \"무엇을 만들 것인가\"보다 \"어떤 비용을 줄일 것인가\"를 먼저 정의해야 한다. 특히 서비스가 커질수록 사소해 보이는 설계 결정이 누적되어 접근성, 유지보수성, QA 비용까지 연결되기 때문에, 주제의 범위를 좁게 잡으면 실무 판단이 흔들리기 쉽다.`,
      "",
      `이 가이드는 ${keyword}를 단순 구현 팁이 아니라 우리가 재사용할 수 있는 정리 문서로 설계했다. 따라서 개념 정의와 함께 표준 근거, 적용 단계, 실패 패턴, 검수 루틴을 같이 제시한다. 바로 업무에 적용할 수 있도록 항목별 체크 기준을 명확히 적고, 실제 검토 상황에서 자주 발생하는 오해를 먼저 정리하는 흐름을 따른다.`,
      "",
      "## 오해가 생기는 지점",
      "",
      `${keyword} 관련 논의가 실패하는 가장 흔한 이유는 용어를 같은 말로 쓰지만 서로 다른 기대를 품고 있다는 점이다. 기획은 사용자 시나리오를 말하고, 개발은 구현 제약을 말하며, QA는 재현 가능한 기준을 요구한다. 이때 중간 정의가 빠지면 같은 회의에서 합의한 내용이 실제 작업 단계에서 다른 결과물로 나타난다.`,
      "",
      "오해를 줄이려면 먼저 \"이 기능이 해결해야 할 사용자 문제\"를 한 문장으로 합의하고, 그다음 기술적 방법을 결정해야 한다. 즉, 해결 대상이 먼저고 컴포넌트나 UI 형태는 나중이다. 이 순서를 지키면 구현 방식이 달라도 품질 기준은 흔들리지 않다.",
      "",
      "## 배경과 맥락",
      "",
      `${keyword}의 중요성은 단발성 개선이 아니라 운영 누적 효과에서 드러난다. 처음에는 작은 편의 기능처럼 보이지만, 페이지 수와 사용자 유형이 늘어날수록 동일한 문제를 반복적으로 처리해야 하기 때문이다. 결국 실무에서는 \"한 번의 구현\"보다 \"지속적으로 같은 품질을 재현하는 체계\"를 갖추는 쪽으로 시선을 옮겨야 한다.`,
      "",
      "또한 서비스가 다양한 디바이스와 보조기기를 동시에 고려해야 하는 단계에 들어가면, 기능 존재 여부보다 예측 가능한 동작이 더 중요해진다. 사용자 관점에서는 화면이 조금 달라도 핵심 동작이 일관되게 유지되어야 하므로, 정책 문서와 컴포넌트 규칙을 함께 관리하는 접근이 필요하다.",
      "",
      "## 표준과 근거를 읽는 방법",
      "",
      `${keyword}를 표준 기반으로 설명할 때는 문서 이름만 인용하는 수준에서 멈추면 안 된다. 어떤 요구사항을 어떤 제품 맥락에 적용했는지, 그 결정이 왜 현재 버전에서도 유효한지까지 적어야 검토가 가능하다. 공개 글과 개인 노트에는 최소한 기준 문서명, 확인 날짜, 적용 범위를 함께 남겨 두는 것이 좋다.`,
      "",
      "여기에 더해 표준 해석과 실제 제품 제약이 부딪히는 지점을 분리해 적어두면 추후 의사결정 비용이 크게 줄어든다. 예외를 숨기지 않고 기록할수록 회귀 이슈를 빠르게 복구할 수 있다. 결국 근거 문서는 규정을 보여주기 위한 장식이 아니라, 변화가 생겼을 때 우리가 같은 방향으로 판단하게 만드는 기준선이다.",
      "",
      "## 핵심 개념 정리",
      "",
      `${keyword}를 다룰 때는 목적, 대상, 성공 기준을 분리해 정의해야 한다. 목적은 사용자 부담을 어떤 방식으로 줄이는지, 대상은 어떤 상황의 사용자가 이 기능으로 이익을 얻는지, 성공 기준은 배포 후 무엇을 확인하면 \"잘 되었다\"고 볼 수 있는지에 대한 합의이다. 이 세 축이 분리되지 않으면 테스트 항목이 구현 세부사항에 매몰된다.`,
      "",
      "실무 문서에서는 개념 설명을 길게 쓰기보다, 개념이 설계와 검수에 어떻게 연결되는지를 함께 제시하는 편이 좋다. 예를 들어 \"인지 가능성\"을 말한다면 대비·크기·표현 위치 같은 관측 가능한 요소로 풀어야 한다. 추상 개념을 관측 항목으로 내려놓는 순간, 커뮤니케이션 품질이 올라간다.",
      "",
      "## 실무 적용 단계",
      "",
      `1. 진단: 현재 사용자 흐름에서 ${keyword}가 실제로 막히는 구간을 수집하고 우선순위를 정한다.`,
      "2. 설계: 기준 문구, UI 노출 방식, 상태 전환 규칙을 문서화해 구현 범위를 고정한다.",
      "3. 구현: 최소 기능부터 적용하되 공통 컴포넌트에 녹여 재사용성을 확보한다.",
      "4. 검증: 키보드, 화면리더, 확대 환경 등 주요 시나리오를 동일 절차로 재현한다.",
      "5. 운영: 배포 후 회귀 체크리스트를 유지하고 새 이슈를 기준 문서에 즉시 반영한다.",
      "",
      "단계형 접근의 장점은 개발 속도보다 품질 편차를 줄인다는 데 있다. 처음부터 완벽한 해법을 찾기보다, 검증 가능한 단위를 빠르게 반복하는 편이 실제 운영 환경에서 더 안정적으로 작동한다. 각 단계 산출물이 다음 단계 입력값으로 이어지도록 문서 구조를 맞춰두면 담당자가 바뀌어도 지식 손실을 줄일 수 있다.",
      "",
      "## 안티패턴과 리스크",
      "",
      "다음 패턴은 초기에는 빠르게 보이지만 중장기적으로 비용을 키운다.",
      "",
      "- 목적과 무관한 옵션을 계속 추가해 사용자 선택 비용을 늘리는 패턴",
      "- 공통 규칙 없이 화면별로 구현해 동작 일관성을 잃는 패턴",
      "- 접근성 검증을 배포 직전 1회성 점검으로만 처리하는 패턴",
      "",
      "리스크 대응의 핵심은 기능 추가보다 운영 루틴에 있다. 설계 리뷰 단계에서 실패 패턴을 먼저 차단하고, 구현 완료 후에는 회귀 가능성이 높은 시나리오를 자동화하거나 체크리스트로 고정해야 한다. 실패를 개인 숙련도 문제로 돌리기보다, 구조적으로 재발을 막는 흐름을 만들어야 품질이 안정된다.",
      "",
      "## 개발과 검수 방법",
      "",
      "검수는 \"동작한다\"를 확인하는 과정이 아니라 \"사용자가 같은 방식으로 성공할 수 있다\"를 증명하는 과정이다. 따라서 키보드 탐색, 보조기기 낭독, 화면 확대 등 실제 사용 조건을 반영한 테스트 순서를 고정해야 한다. 테스트 담당자가 바뀌어도 동일한 결론이 나오도록, 실행 방법과 기대 결과를 문서에 함께 남기는 것이 중요하다.",
      "",
      "권장 루틴은 기능 단위 수동 점검과 공통 회귀 점검의 이중 구조이다. 기능 점검에서는 해당 변경이 사용 흐름을 깨지 않는지 보고, 회귀 점검에서는 기존 주요 경로가 영향을 받지 않았는지 확인한다. 두 검수를 분리하면 문제 위치를 빠르게 좁힐 수 있고, 수정 범위도 현실적으로 관리할 수 있다.",
      "",
      "## 적용 전략",
      "",
      `${keyword}를 지속적으로 활용하려면 \"개인 역량\"보다 \"공통 계약\"이 먼저 필요하다. PR 템플릿, 리뷰 체크리스트, 릴리스 검증 항목에 동일한 기준 문구를 넣어두면, 담당자가 달라져도 결과물 편차를 줄일 수 있다. 문서와 코드가 따로 놀지 않도록 컴포넌트 레벨 규칙과 운영 문서를 같이 갱신하는 습관을 붙이는 것이 중요하다.`,
      "",
      "조직 규모가 커질수록 예외 관리는 피할 수 없다. 이때 예외를 비공식 대화로 처리하면 다음 주기에 같은 논쟁이 반복된다. 예외 사유와 종료 조건을 기록하고, 일정 주기로 폐기 여부를 확인하는 체계를 두면 규칙이 불필요하게 비대해지는 것을 막을 수 있다.",
      "",
      "## 체크리스트",
      "",
      "- [ ] 문제 정의가 기능 설명이 아니라 사용자 행동 기준으로 작성되었는가",
      "- [ ] 표준/가이드 근거에 기준 문서와 확인 날짜가 함께 기록되었는가",
      "- [ ] 적용 단계(진단-설계-구현-검증-운영)가 문서에 분리되어 있는가",
      "- [ ] 실패 패턴과 회피 전략이 구현 지침과 연결되어 있는가",
      "- [ ] 회귀 검수 항목이 PR/릴리스 프로세스에 포함되어 있는가",
      "",
      "## 결론",
      "",
      `${keyword}의 본질은 기능을 더하는 일이 아니라, 사용자가 목표에 도달하는 데 드는 조작 비용과 불확실성을 줄이는 일이다. 그래서 좋은 문서는 기술 스펙을 길게 설명하는 대신, 우리가 같은 기준으로 판단하고 재현할 수 있는 구조를 제공한다. 기준을 명확히 정의하고 검수 루틴까지 운영 체계에 연결하면, 서비스가 커져도 품질을 예측 가능한 수준으로 유지할 수 있다.`
    ].join("\n")
  };
}

async function generateWithOpenAI(keyword) {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  // default to a Codex code-generating model when none is specified
  // user can still override via OPENAI_MODEL environment variable
  const model = process.env.OPENAI_MODEL || "code-davinci-002";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "당신은 시니어 기술 블로그 편집자다. 한국어로 작성하고 JSON만 반환한다. 필드: title, description, tags(string[]), body(markdown). 장군블로그 스타일을 기본으로 적용한다: 오해 바로잡기형 도입, 개념 정의, 표준 근거(날짜 포함), 올바른 사용법, 잘못된 사례, 개발 검수 방법, 마무리 순서. body는 상세 long-form으로 작성하며 최소 H2 9개, H3 12개 이상을 유지하고 단계형 가이드와 체크리스트, 코드/템플릿 예시를 포함한다. 문단은 단문 나열을 피하고 3~6문장 산문형으로 작성하되, 비교/절차/요약/체크포인트처럼 논리 전달이 더 명확해지는 구간은 리스트(불릿/번호)를 우선 사용한다. 표준/스펙 주제는 반드시 요구사항, 동작 원리, 입력 규칙, 유효/무효 사례, 검수 방법을 포함해 오해를 줄인다. h1/h2/h3 제목에는 숫자 넘버링(예: 1., 1), 01.)을 사용하지 않는다. 글은 특정 조직 내부 문서가 아니라 공개 포스팅으로 작성하고, `우리 팀/팀이 해야 한다` 같은 특정 집단 주어를 남발하지 않는다. 필요할 때는 `우리가` 또는 무주어 문장을 사용한다. 문장 종결은 기본적으로 `-다/-이다` 체로 통일한다. 한국 실무에서 낯선 어려운 용어는 쉬운 한국어로 바꾸고, 필요할 때만 첫 등장에 영어 원어를 괄호로 병기한다. 기술·사회·인문 맥락을 연결하되 과장 없이 근거 중심의 실무 톤을 유지한다."
        },
        {
          role: "user",
          content: `${keyword} 키워드로 블로그 초안을 작성해줘. 오해하기 쉬운 지점을 먼저 정리하고, 표준 근거와 잘못된 사례를 포함해 실무형 가이드로 작성해줘.`
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI response did not include content");
  }

  let payload;
  try {
    payload = JSON.parse(content);
  } catch {
    throw new Error("OpenAI response was not valid JSON");
  }

  if (!payload?.title || !payload?.description || !payload?.body) {
    throw new Error("OpenAI payload is missing required fields");
  }

  return {
    title: String(payload.title).trim(),
    description: String(payload.description).trim(),
    tags: cleanupTags(payload.tags, keyword),
    body: String(payload.body).trim()
  };
}

async function fileExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function writeGitHubOutputs(outputs) {
  if (!process.env.GITHUB_OUTPUT) {
    return;
  }

  const lines = Object.entries(outputs).map(([key, value]) => {
    const escaped = String(value).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    return `${key}=${escaped}`;
  });

  await appendFile(process.env.GITHUB_OUTPUT, `${lines.join("\n")}\n`, "utf8");
}

const keyword = getArg("--keyword").trim();
if (!keyword) {
  console.error("Error: --keyword is required");
  process.exit(1);
}

const featured = parseBoolean(getArg("--featured"), false);
const draft = parseBoolean(getArg("--draft"), true);
const author = getArg("--author", "관리자").trim() || "관리자";

const seoul = toSeoulParts();
const datePrefix = `${seoul.year}-${seoul.month}-${seoul.day}`;
const pubDatetime = `${datePrefix}T${seoul.hour}:${seoul.minute}:${seoul.second}+09:00`;
const slugBase = keywordSlugToken(keyword);

let payload = fallbackPayload(keyword);
let source = "fallback-template";

try {
  const openaiPayload = await generateWithOpenAI(keyword);
  if (openaiPayload) {
    payload = openaiPayload;
    source = "openai";
  }
} catch (error) {
  console.warn(`Warning: ${error.message}`);
}

const tags = cleanupTags(payload.tags, keyword);
const title = payload.title || `${keyword} 인사이트`; 
const description = payload.description || `${keyword} 관련 인사이트 요약`;
const body = payload.body || fallbackPayload(keyword).body;

await mkdir(path.join(process.cwd(), "src", "content", "posts"), { recursive: true });

let filename = `${datePrefix}-${slugBase}.md`;
let absolutePath = path.join(process.cwd(), "src", "content", "posts", filename);
let serial = 2;

while (await fileExists(absolutePath)) {
  filename = `${datePrefix}-${slugBase}-${serial}.md`;
  absolutePath = path.join(process.cwd(), "src", "content", "posts", filename);
  serial += 1;
}

const markdown = [
  "---",
  `title: ${yamlString(title)}`,
  `description: ${yamlString(description)}`,
  `pubDatetime: ${pubDatetime}`,
  `draft: ${draft}`,
  `featured: ${featured}`,
  `author: ${yamlString(author)}`,
  "tags:",
  ...tags.map((tag) => `  - ${tag}`),
  "---",
  "",
  `<!-- source: ${source}, keyword: ${keyword} -->`,
  "",
  body,
  ""
].join("\n");

await writeFile(absolutePath, markdown, "utf8");

const relPath = path.relative(process.cwd(), absolutePath).split(path.sep).join("/");
const slug = filename.replace(/\.md$/, "");

const outputs = {
  post_path: relPath,
  post_slug: slug,
  post_title: title,
  post_source: source
};

await writeGitHubOutputs(outputs);

console.log(JSON.stringify(outputs, null, 2));
