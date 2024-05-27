// GoogleTranslate.tsx
'use client';
import { useEffect } from "react";

const GoogleTranslate: React.FC = () => {
  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      document.body.removeChild(addScript);
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  );
};

export default GoogleTranslate;
