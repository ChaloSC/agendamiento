import React, { useState, useEffect, useCallback } from "react";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import esLocale from "dayjs/locale/es"; // Español

interface TopbarLocale {
  filters: string;
  next: string;
  prev: string;
  today: string;
  view: string;
}

interface LangLocale {
  feelingEmpty: string;
  free: string;
  loadNext: string;
  loadPrevious: string;
  over: string;
  taken: string;
  topbar: TopbarLocale;
  search: string;
  week: string;
}

interface LocaleType {
  id: string;
  lang: LangLocale;
  translateCode: string;
  dayjsTranslations: Record<string, any>; // Ajustado para locales de Day.js
}

const SchedulerTable: React.FC = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);

  dayjs().locale("es").format(); // use loaded locale locally

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback((range: any) => {
    console.log("🚀 ~ handleRangeChange ~ range:", range);
    setRange(range);
  }, []);

  // Filtering events that are included in current date range
  // Example can be also found on video https://youtu.be/9oy4rTVEfBQ?t=118&si=52BGKSIYz6bTZ7fx
  // and in the react-scheduler repo App.tsx file https://github.com/Bitnoise/react-scheduler/blob/master/src/App.tsx
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) =>
        // we use "dayjs" for date calculations, but feel free to use library of your choice
        dayjs(project.startDate).isBefore(range.startDate, range.endDate) ||
        dayjs(project.endDate).isAfter(range.startDate, range.endDate) ||
        (dayjs(project.startDate).isBefore(range.startDate, "day") &&
          dayjs(project.endDate).isAfter(range.endDate, "day"))
    ),
  }));

  return (
    <div className="container mx-auto py-8">
      <div className="relative min-h-[650px] ">
        <Scheduler
          data={filteredMockedSchedulerData}
          onRangeChange={handleRangeChange}
          onTileClick={(clickedResource) => console.log(clickedResource)}
          onItemClick={(item) => console.log(item)}
          onFilterData={() => {
            // Some filtering logic...
            setFilterButtonState(1);
          }}
          onClearFilterData={() => {
            // Some clearing filters logic...
            setFilterButtonState(0);
          }}
          config={{
            showThemeToggle: true,
            lang: "es",
            translations: langs,
            zoom: 0,
            filterButtonState,
          }}
        />
      </div>
    </div>
  );
};

export default SchedulerTable;

const langs: LocaleType[] = [
  {
    id: "es",
    lang: {
      feelingEmpty: "Se siente tan vacio aquí...",
      free: "Libre",
      loadNext: "Siguiente",
      loadPrevious: "Previo",
      over: "Sobre",
      taken: "Tomado",
      topbar: {
        filters: "Filtros",
        next: "Siguiente",
        prev: "Anterior",
        today: "Hoy",
        view: "Vista",
      },
      search: "Buscar",
      week: "Semana",
    },
    translateCode: "es-CL",
    dayjsTranslations: esLocale,
  },
];

const mockedSchedulerData: SchedulerData = [
  {
    id: "e0f6753b-e788-4b47-a0c6-e4d9a9796cb4",
    label: {
      icon: "https://picsum.photos/24?random=1",
      title: "User 1",
      subtitle: "Role 1",
    },
    data: [
      {
        id: "504349f1-dde0-4905-b16d-ab14b1089574",
        startDate: new Date("2024-12-27T23:17:39.015Z"),
        endDate: new Date("2024-12-28T00:17:39.015Z"),
        occupancy: 2323,
        title: "Project Q",
        subtitle: "Subtitle Z",
        description: "Description 7b251310",
        bgColor: "rgb(173,171,164)",
      },
      {
        id: "10249532-ec06-4250-9c07-a8111c6904b7",
        startDate: new Date("2024-12-27T23:17:39.015Z"),
        endDate: new Date("2024-12-28T00:17:39.015Z"),
        occupancy: 1851,
        title: "Project U",
        subtitle: "Subtitle D",
        description: "Description a6f0d08e",
        bgColor: "rgb(198,244,239)",
      },
    ],
  },
  {
    id: "0faf1edc-45b0-4e38-979c-e5d6e01348ec",
    label: {
      icon: "https://picsum.photos/24?random=2",
      title: "User 2",
      subtitle: "Role 2",
    },
    data: [
      {
        id: "753fa724-16fd-4cd3-b669-690142814e50",
        startDate: new Date("2024-12-27T22:17:39.015Z"),
        endDate: new Date("2024-12-28T02:17:39.015Z"),
        occupancy: 2358,
        title: "Project U",
        subtitle: "Subtitle R",
        description: "Description 12b70ff1",
        bgColor: "rgb(216,163,193)",
      },
      {
        id: "0a7725a2-96ec-4bf2-ad10-0212b4894d50",
        startDate: new Date("2024-12-29T10:17:39.015Z"),
        endDate: new Date("2024-12-29T15:17:39.015Z"),
        occupancy: 3062,
        title: "Project T",
        subtitle: "Subtitle U",
        description: "Description b62e716d",
        bgColor: "rgb(209,184,185)",
      },
    ],
  },
  {
    id: "51632b74-8ff5-471f-8e7b-c943a9e9943b",
    label: {
      icon: "https://picsum.photos/24?random=3",
      title: "User 3",
      subtitle: "Role 3",
    },
    data: [
      {
        id: "89b695d4-f959-4464-aa05-5c97b668f95b",
        startDate: new Date("2024-12-28T23:17:39.015Z"),
        endDate: new Date("2024-12-29T00:17:39.015Z"),
        occupancy: 4211,
        title: "Project Y",
        subtitle: "Subtitle R",
        description: "Description 9242f4d2",
        bgColor: "rgb(182,158,156)",
      },
      {
        id: "0b29507b-4af0-4d23-acc7-fe3300aacb2f",
        startDate: new Date("2024-12-28T01:17:39.015Z"),
        endDate: new Date("2024-12-28T06:17:39.015Z"),
        occupancy: 3102,
        title: "Project C",
        subtitle: "Subtitle L",
        description: "Description d3697003",
        bgColor: "rgb(211,158,227)",
      },
    ],
  },
];
