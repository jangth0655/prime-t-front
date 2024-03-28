import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 100;
const marks = [0, 25, 50, 75, 100];

type Props = {
  values?: number[];
  onChange: (values: number[]) => void;
};

export default function FeedInputRange({ onChange, values = [0] }: Props) {
  return (
    <div>
      <div className="w-[20.5rem] px-4">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => onChange(values)}
          renderMark={({ props, index }) => {
            const { key, ...rest } = props;
            if (marks.includes(index * STEP)) {
              return (
                <div
                  key={key}
                  {...rest}
                  style={{
                    ...rest.style,
                    height: "8px",
                    width: "3px",
                    backgroundColor:
                      index * STEP < values[0] ? "#548BF4" : "#ccc",
                  }}
                />
              );
            }
            return null;
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "4px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#5770F2", "#C8C9DF"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...rest } = props;
            return (
              <div
                key={key}
                {...rest}
                style={{
                  ...rest.style,
                }}
                className="w-6 h-6 rounded-full flex justify-center items-center bg-[#5770F2] outline-none"
              ></div>
            );
          }}
        />
      </div>
    </div>
  );
}
