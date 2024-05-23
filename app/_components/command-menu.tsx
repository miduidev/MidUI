"use client";

import "react-cmdk/dist/cmdk.css";
import React, { useEffect, useMemo } from "react";
import CommandPalette, {
  filterItems,
  getItemIndex,
  JsonStructureItem,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState } from "react";
import { categories, components } from "@/lib/emitter";
import { transformCategory } from "@/utils";
import { useRouter } from "next/navigation";
import useOpenStore from "@/store/store";

export const CommandMenu = ({
  onOpenChange
}: {
  onOpenChange: (open: boolean) => void;
}) => {
  
  const [page] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(false);
  const setIsOpen = useOpenStore((state) => state.setIsOpen);
  const isOpen = useOpenStore((state) => state.isOpen);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const items = useMemo(() => {
    return categories.map((category) => ({
      heading: transformCategory(category),
      id: category,
      items: components
        .filter((c) => c.metadata.category === category)
        .map((c) => ({
          id: c.metadata.title,
          children: c.metadata.title,
          onClick: () => {
            router.push(`/docs/components/${category}#${c.metadata.title}`);
          },
        })) as JsonStructureItem[],
    }));
  }, [router]);

  const filteredItems = filterItems(
    [
      {
        heading: "Documentation",
        id: "documentation",
        items: [
          {
            id: "1",
            children: "Getting Started",
          },
          {
            id: "2",
            children: "Usage",
          },
        ],
      },
      // {
      //   heading: "Components",
      //   id: "components",
      //   items,
      // },
      ...items,
    ],
    search
  );

  useHandleOpenCommandPalette(setOpen);

  useEffect(() => {
    onOpenChange(open);
    setIsOpen(open);
  }, [open, onOpenChange]);

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>
    </CommandPalette>
  );
};
