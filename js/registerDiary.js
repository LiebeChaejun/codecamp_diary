let diaries = [];

document.querySelector(".register").addEventListener("click", () => {
  const emotion =
    document.querySelector('input[name="emotion"]:checked')?.value ?? null;
  const title = document.querySelector("#diary_content_title").value.trim();
  const content = document.querySelector("#diary_content_content").value.trim();

  if (!emotion) return alert("오늘의 기분을 선택해 주세요.");
  if (!title) return alert("제목을 입력해 주세요.");
  if (!content) return alert("내용을 입력해 주세요.");

  diaries.push({
    id: Date.now(),
    emotion,
    title,
    content,
    createAt: new Date().toISOString(),
  });

  console.log(diaries);

  // 등록 후 폼 초기화
  document
    .querySelectorAll('input[name="emotion"]')
    .forEach((el) => (el.checked = false));
  document.querySelector("#diary_content_title").value = "";
  document.querySelector("#diary_content_content").value = "";
});
