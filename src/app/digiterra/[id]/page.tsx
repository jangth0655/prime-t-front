import PageHeader from "@/components/PageHeader";
import DigiterraDetail from "@/components/digiterra/DigiterraDetail";

export default function DigiterraDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <section>
      <PageHeader title="상품정보" />
      <DigiterraDetail detailId={Number(id)} />
    </section>
  );
}
