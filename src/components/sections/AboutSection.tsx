"use client";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  Award,
  BookOpen,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function AboutSection() {
  return (
    <motion.section
      className="py-24 bg-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center md:text-left md:flex w-full justify-center items-center gap-5"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 pb-1 md:mb-0 mb-5">
            저는
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            단순히 화면을 구현하는 데에 그치지 않고, 사용자의 흐름과 비즈니스
            요구, 팀의 협업 구조까지 함께 고려하는 제품 중심의 개발자입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            variants={fadeInUp}
            className="flex flex-col h-full space-y-6"
          >
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900">
                기술적 철학
              </h3>
              <p className="text-gray-600 leading-relaxed pt-5">
                Next.js, TypeScript, React, Zustand, React Query, Supabase 등
                현대적인 기술 스택을 기반으로 개발하고 있으며, Storybook 기반의
                디자인 시스템 구축부터 테스팅 자동화, CI/CD 환경 세팅, 에러
                핸들링 전략 설계까지 다양한 프로젝트 경험을 통해
                <span className="text-blue-600 font-semibold">
                  {" "}
                  지속 가능한 제품 개발
                </span>
                의 전 과정을 이해하고 실천해왔습니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <Code className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React, Next.js, Vue.js</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <Smartphone className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Desktop / Mobile
                </h4>
                <p className="text-sm text-gray-600">React Native, Electron</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <Palette className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
                <p className="text-sm text-gray-600">Figma, Storybook</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <Cloud className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">CI/CD</h4>
                <p className="text-sm text-gray-600">
                  Docker, Jenkins, Github Actions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="flex flex-col h-full space-y-6"
          >
            {/* 학교 정보 카드 */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">한림대학교</h4>
                    <p className="text-sm text-gray-600">
                      2021년 9월~2025년 8월
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">소프트웨어융합학과</p>
                </div>
              </div>
            </div>

            {/* 수상 정보 카드 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
                <h4 className="font-semibold text-gray-900">수상 경력</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-semibold">
                      정주영 창업경진대회 우수상
                    </span>
                    <p className="text-sm text-gray-600">2024.11.20</p>
                  </div>
                  <p className="text-sm text-gray-600 pl-6 pt-2">
                    CareMinder 프로덕트의 프론트엔드 리드를 맡아 태블릿/PC 웹
                    앱을 개발했으며, 본 프로젝트로 정주행 창업경진대회 우수상 및
                    인기상을 수상하였습니다
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-semibold">
                      오픈소스SW웹 해커톤 금상
                    </span>
                    <p className="text-sm text-gray-600">2023.09.18</p>
                  </div>
                  <p className="text-sm text-gray-600 pl-6 pt-2">
                    오픈소스를 활용한 웹 해커톤에서, 안전지대(Safety Zone) 기반
                    거래 기능과 실시간 시세 확인 기능을 갖춘 교내 중고거래
                    플랫폼을 개발하여 금상을 수상하였습니다
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      캡스톤 디자인 입상
                    </span>
                    <p className="text-sm text-gray-600">2023.06.10</p>
                  </div>
                  <p className="text-sm text-gray-600 pl-6 pt-2">
                    OCR(광학 문자 인식)과 TTS(텍스트 음성 변환) 기술을 활용하여
                    PDF 파일을 음성으로 읽어주는 앱을 개발하였습니다.
                    강원명진학교를 직접 방문하여 시각장애인 사용자들의 실제
                    요구를 반영하고 피드백을 수렴하여 사용자 중심의 기능을
                    구현하였습니다.
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-semibold">
                      국민은행 ESG공모전 장려상
                    </span>
                    <p className="text-sm text-gray-600">2021.10.01</p>
                  </div>
                  <p className="text-sm text-gray-600 pl-6 pt-2">
                    koGPT2를 활용한 소아 우울증 진단 및 관리 앱 개발을 통해
                    인공지능 기반 정신 건강 솔루션을 제안하였으며, 해당
                    프로젝트로 장려상을 수상하였습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
