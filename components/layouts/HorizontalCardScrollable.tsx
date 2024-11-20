// TODO: Write tests for this component.
import React from "react";
import { View, Text } from "react-native";

// Constants
import TYPOGRAPHY from "@/constants/Typography";
import COLORS from "@/constants/Colors";
import SPACING from "@/constants/Spacing";

// Components
import ScrollableLayout from "./ScrollableLayout";
import Divider from "../common/Divider";

type HorizontalCardScrollableLayoutProps = {
  /** Title to display above the horizontal scroll section */
  title?: string;

  /** Child components to render inside the horizontal scroll section */
  children: React.ReactNode;

  /** Margin above the scrollable area */
  scrollMarginTop?: number;

  /** Margin below the scrollable area */
  scrollMarginBottom?: number;

  /** Outer margin above the entire layout */
  outerMarginTop?: number;

  /** Outer margin below the entire layout */
  outerMarginBottom?: number;

  /** Whether to show a divider above the layout */
  dividerTop?: boolean;

  /** Whether to show a divider below the layout */
  dividerBottom?: boolean;

  /** Height of the dividers (default is 1) */
  dividerHeight?: number;

  /** Margin above the title text */
  titleMarginTop?: number;

  /** Gap between each card in the horizontal scroll section (default is 12) */
  scrollGap?: number;
};

/**
 * ## HorizontalCardScrollableLayout
 *
 * A reusable layout component for creating horizontally scrollable sections
 * with optional dividers, title, and customizable margins.
 *
 * **Note**: The scrollable component inside this layout has some default
 * vertical padding of 16px to make it easier to scroll. You can't remove
 * this padding without modifying the component's source code.
 *
 * ### Example Usage
 * ```tsx
 * <HorizontalCardScrollableLayout
 *   title="Popular Cafés"
 *   dividerTop
 *   dividerBottom
 *   titleMarginTop={8}
 *   scrollMarginTop={16}
 *   scrollMarginBottom={16}
 * >
 *   <Card title="Café 1" />
 *   <Card title="Café 2" />
 *   <Card title="Café 3" />
 * </HorizontalCardScrollableLayout>
 * ```
 *
 * @param HorizontalCardScrollableLayoutProps - Component props.
 */
export default function HorizontalCardScrollableLayout({
  title,
  children,
  scrollMarginTop = 0,
  scrollMarginBottom = 0,
  outerMarginTop = 0,
  outerMarginBottom = 0,
  dividerTop = false,
  dividerBottom = false,
  dividerHeight = 1,
  titleMarginTop = 0,
  scrollGap = SPACING["sm"],
}: HorizontalCardScrollableLayoutProps) {
  return (
    <>
      {/* Top Divider */}
      {dividerTop ? (
        <Divider
          marginTop={outerMarginTop}
          marginBottom={titleMarginTop}
          height={dividerHeight}
        />
      ) : (
        // Divider is not visible on the user' screen
        <Divider
          marginTop={outerMarginTop}
          marginBottom={titleMarginTop}
          height={0}
        />
      )}

      {/* Horizontal Scroll Title */}
      {title && (
        <Text
          style={[
            TYPOGRAPHY.heading.small.bold,
            {
              paddingHorizontal: SPACING["md"],
            },
          ]}
        >
          {title}
        </Text>
      )}

      {/* Horizontal Scroll Section */}
      <ScrollableLayout
        scrollHorizontal
        style={[
          styles.horizontalScroll,
          { marginTop: scrollMarginTop, marginBottom: scrollMarginBottom },
        ]}
      >
        <View style={[styles.container, { gap: scrollGap }]}>{children}</View>
      </ScrollableLayout>

      {/* Bottom Divider */}
      {dividerBottom ? (
        <Divider marginTop={outerMarginBottom} />
      ) : (
        // Divider is not visible on the user' screen
        <Divider marginTop={outerMarginBottom} height={0} />
      )}
    </>
  );
}

const styles = {
  horizontalScroll: {
    paddingVertical: SPACING["sm"], // Added some padding to make it easy to scroll
    paddingHorizontal: SPACING["md"],
  },
  container: {
    paddingRight: SPACING["md"],
    flexDirection: "row" as "row",
  },
};
