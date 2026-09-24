import type { ComponentProps } from "react";

import { FormField } from "@/components/auth/FormField";

type Props = ComponentProps<typeof FormField>;

export function ApplicationFormField(props: Props) {
  return (
    <div className="careers-application-field space-y-2">
      <FormField {...props} />
    </div>
  );
}
