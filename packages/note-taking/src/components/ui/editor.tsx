import { Plate, PlateContent, type PlateProps } from '@udecode/plate-common';

export default function BasicEditor(props: PlateProps) {
  return (
    <Plate {...props}>
      <PlateContent  placeholder="Type..." />
    </Plate>
  );
}