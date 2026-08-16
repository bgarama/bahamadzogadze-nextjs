#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 route-name"
  echo "Example: $0 news"
  exit 1
fi

ROUTE="$1"
DIR="src/app/$ROUTE"

mkdir -p "$DIR"

to_component_name() {
  echo "$1" | awk -F- '{
    for (i = 1; i <= NF; i++) {
      $i = toupper(substr($i, 1, 1)) substr($i, 2)
    }
    printf "%s", $0
  }' OFS=""
}

to_title() {
  echo "$1" | sed 's/-/ /g' | awk '{
    for (i = 1; i <= NF; i++) {
      $i = toupper(substr($i, 1, 1)) substr($i, 2)
    }
    print
  }'
}

COMPONENT_NAME="$(to_component_name "$ROUTE")Page"
TITLE="$(to_title "$ROUTE")"

if [ ! -f "$DIR/page.tsx" ]; then
  cat > "$DIR/page.tsx" <<EOT
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import styles from './page.module.css';

export default function ${COMPONENT_NAME}() {
  return (
    <>
      <PageHero
        title="${TITLE}"
        subtitle="Page subtitle goes here."
        actions={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section>
        <div className={styles.wrapper}>
          <h2>Page Content</h2>
          <p>Replace this scaffold with real content.</p>
        </div>
      </Section>
    </>
  );
}
EOT
fi

if [ ! -f "$DIR/page.module.css" ]; then
  cat > "$DIR/page.module.css" <<'EOT'
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
EOT
fi

echo "Scaffold created for $DIR"
