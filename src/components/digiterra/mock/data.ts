import { Status } from "@/components/StatusCategory";

type DigiterraData = {
  createDate: string;
  endDate: string;
  status: Status;
  description: string;
  entity: string;
  progressPercent: "";
};

//const digiterraData = [];
const digiterraList: DigiterraData[] = [];

/**
 * 
 *  {
    createDate: "00월 00일 오픈",
    endDate: "0000.00.00 마감",
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    status: {
      key: "progress",
      name: "진행중",
    },
    entity: "청약단체/인물",
  },
  {
    createDate: "00월 00일 오픈",
    endDate: "0000.00.00 마감",
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    status: {
      key: "progress",
      name: "진행중",
    },
    entity: "청약단체/인물",
  },
  {
    createDate: "00월 00일 오픈",
    endDate: "0000.00.00 마감",
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    status: {
      key: "progress",
      name: "진행중",
    },
    entity: "청약단체/인물",
  },
  {
    createDate: "00월 00일 오픈",
    endDate: "0000.00.00 마감",
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    status: {
      key: "progress",
      name: "진행중",
    },
    entity: "청약단체/인물",
  },
 */
