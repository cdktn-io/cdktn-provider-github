# `enterpriseIpAllowListEntry` Submodule <a name="`enterpriseIpAllowListEntry` Submodule" id="@cdktn/provider-github.enterpriseIpAllowListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseIpAllowListEntry <a name="EnterpriseIpAllowListEntry" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntry;

EnterpriseIpAllowListEntry.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enterpriseSlug(java.lang.String)
    .ip(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.ip">ip</a></code> | <code>java.lang.String</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | An optional name for the IP allow list entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.enterpriseSlug"></a>

- *Type:* java.lang.String

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.ip"></a>

- *Type:* java.lang.String

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.isActive"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.name"></a>

- *Type:* java.lang.String

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId"></a>

```java
public void resetId()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntry;

EnterpriseIpAllowListEntry.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntry;

EnterpriseIpAllowListEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntry;

EnterpriseIpAllowListEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntry;

EnterpriseIpAllowListEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EnterpriseIpAllowListEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EnterpriseIpAllowListEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EnterpriseIpAllowListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput"></a>

```java
public java.lang.String getEnterpriseSlugInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput"></a>

```java
public java.lang.Boolean|IResolvable getIsActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug"></a>

```java
public java.lang.String getEnterpriseSlug();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseIpAllowListEntryConfig <a name="EnterpriseIpAllowListEntryConfig" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.Initializer"></a>

```java
import io.cdktn.providers.github.enterprise_ip_allow_list_entry.EnterpriseIpAllowListEntryConfig;

EnterpriseIpAllowListEntryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enterpriseSlug(java.lang.String)
    .ip(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>java.lang.String</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip">ip</a></code> | <code>java.lang.String</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name">name</a></code> | <code>java.lang.String</code> | An optional name for the IP allow list entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug"></a>

```java
public java.lang.String getEnterpriseSlug();
```

- *Type:* java.lang.String

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---



