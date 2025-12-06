export const handleEmailCopy = (email: string) => {
  if (typeof window === "undefined") return;
  navigator.clipboard.writeText(email);
  window.alert("이메일이 복사되었습니다.");
};

