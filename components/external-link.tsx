import { Link, LinkProps } from "expo-router";
import { Text } from "react-native";

interface ExternalLinkProps extends LinkProps {
  children?: React.ReactNode;
}

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  return (
    <Link href={href} {...rest}>
      <Text style={{ color: "#0a7ea4", textDecorationLine: "underline" }}>
        {children}
      </Text>
    </Link>
  );
}
